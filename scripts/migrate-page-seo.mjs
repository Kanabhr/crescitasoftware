import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

const siteRoot = path.resolve('src/app/(site)')
const blogGroup = `(${['blogs'].join('')})`
const rootTitle = 'Cunnet - Creative Portfolio Agency Nextjs Template'
const preparedChanges = []
const routeTitles = new Map()

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(fullPath) : [fullPath]
  })
}

function routeFor(filePath) {
  const segments = path.relative(siteRoot, filePath).split(path.sep).slice(0, -1)
  if (segments.includes(blogGroup) || segments.some((segment) => /^\[.+\]$/.test(segment))) return null
  const routeSegments = segments.filter((segment) => !/^\(.+\)$/.test(segment))
  if (routeSegments[0] === 'dark') routeSegments.shift()
  return `/${routeSegments.join('/')}`.replace(/\/$/, '') || '/'
}

function findMetadata(sourceFile) {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue
    const declaration = statement.declarationList.declarations.find(
      (item) => ts.isIdentifier(item.name) && item.name.text === 'metadata',
    )
    if (!declaration?.initializer || !ts.isObjectLiteralExpression(declaration.initializer)) continue

    const titleProperty = declaration.initializer.properties.find(
      (item) => ts.isPropertyAssignment(item) && item.name.getText(sourceFile) === 'title',
    )
    if (!titleProperty || !ts.isPropertyAssignment(titleProperty) || !ts.isStringLiteral(titleProperty.initializer)) {
      throw new Error(`Page metadata title must be a string: ${sourceFile.fileName}`)
    }
    return { statement, title: titleProperty.initializer.text }
  }
  return null
}

function findRootJsx(sourceFile) {
  let root = null
  function visit(node) {
    if (root) return
    if (ts.isReturnStatement(node) && node.expression) {
      let expression = node.expression
      while (ts.isParenthesizedExpression(expression)) expression = expression.expression
      if (ts.isJsxElement(expression) || ts.isJsxFragment(expression)) root = expression
    }
    ts.forEachChild(node, visit)
  }
  visit(sourceFile)
  return root
}

function importEdits(sourceFile) {
  const imports = sourceFile.statements.filter(ts.isImportDeclaration)
  const edits = []
  for (const declaration of imports) {
    const clause = declaration.importClause
    const bindings = clause?.namedBindings
    if (!bindings || !ts.isNamedImports(bindings)) continue
    const metadataElement = bindings.elements.find((element) => element.name.text === 'Metadata')
    if (!metadataElement) continue
    if (bindings.elements.length === 1 && !clause.name) {
      edits.push({ start: declaration.getStart(sourceFile), end: declaration.end, text: '' })
    } else {
      const remaining = bindings.elements.filter((element) => element.name.text !== 'Metadata')
      const parts = []
      if (clause.name) parts.push(clause.name.text)
      if (remaining.length) parts.push(`{ ${remaining.map((element) => element.getText(sourceFile)).join(', ')} }`)
      const replacement = `import ${parts.join(', ')} from ${declaration.moduleSpecifier.getText(sourceFile)};`
      edits.push({ start: declaration.getStart(sourceFile), end: declaration.end, text: replacement })
    }
  }

  const lastImport = imports.at(-1)
  const importText = [
    'import { buildMetadata } from "@/lib/seo";',
    'import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";',
    '',
  ].join('\n')
  edits.push({
    start: lastImport?.end ?? 0,
    end: lastImport?.end ?? 0,
    text: `${lastImport ? '\n' : ''}${importText}`,
  })
  return edits
}

function transformPage(filePath, route, source, isDark) {
  if (source.includes('redirect(')) return null

  const sourceFile = ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const root = findRootJsx(sourceFile)
  if (!root) return null

  const metadata = findMetadata(sourceFile)
  const changes = []
  if (metadata && !isDark) {
    routeTitles.set(route, metadata.title)
  }
  if (metadata) {
    changes.push({
      start: metadata.statement.getStart(sourceFile),
      end: metadata.statement.end,
      text: `export async function generateMetadata() {\n    return buildMetadata(${JSON.stringify(route)});\n}`,
    })
  }

  const imports = sourceFile.statements.filter(ts.isImportDeclaration)
  const metadataGeneratorExists = sourceFile.statements.some(
    (statement) =>
      ts.isFunctionDeclaration(statement) &&
      statement.name?.text === 'generateMetadata',
  )
  if (!metadata) {
    if (metadataGeneratorExists) {
      throw new Error(`Page already has a custom generateMetadata function: ${filePath}`)
    }
    const insertAt = imports.at(-1)?.end ?? 0
    changes.push({
      start: insertAt,
      end: insertAt,
      text: `${insertAt ? '\n' : ''}export async function generateMetadata() {\n    return buildMetadata(${JSON.stringify(route)});\n}\n`,
    })
  }

  if (ts.isJsxElement(root)) {
    changes.push({
      start: root.openingElement.end,
      end: root.openingElement.end,
      text: `\n<BreadcrumbJsonLd path=${JSON.stringify(route)} />`,
    })
  } else {
    changes.push({
      start: root.openingFragment.end,
      end: root.openingFragment.end,
      text: `\n<BreadcrumbJsonLd path=${JSON.stringify(route)} />`,
    })
  }
  changes.push(...importEdits(sourceFile))

  for (const change of changes.sort((a, b) => b.start - a.start)) {
    source = source.slice(0, change.start) + change.text + source.slice(change.end)
  }
  return source
}

for (const filePath of walk(siteRoot).filter((file) => file.endsWith(`${path.sep}page.tsx`))) {
  const route = routeFor(filePath)
  if (!route || route === '/') continue

  const isDark = path.relative(siteRoot, filePath).split(path.sep).includes('dark')
  const source = fs.readFileSync(filePath, 'utf8')
  const transformed = transformPage(filePath, route, source, isDark)
  if (!transformed) continue
  preparedChanges.push({ filePath, transformed, isDark })
  if (!isDark && !routeTitles.has(route)) routeTitles.set(route, rootTitle)
}

const routeSource = [
  'export type StaticSeoRoute = { path: string; title: string }',
  '',
  'export const STATIC_SEO_ROUTES: StaticSeoRoute[] = [',
  ...[...routeTitles.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([route, title]) => `  { path: ${JSON.stringify(route)}, title: ${JSON.stringify(title)} },`),
  ']',
  '',
].join('\n')

for (const { filePath, transformed } of preparedChanges) {
  fs.writeFileSync(filePath, transformed)
}
fs.writeFileSync(path.resolve('src/lib/seoRoutes.ts'), routeSource)
console.log(`Updated ${preparedChanges.length} non-blog pages and generated ${routeTitles.size} SEO routes.`)

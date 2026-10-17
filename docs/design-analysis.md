# Design Analysis — cunnet-nextjs

> Every claim is grounded in source code. File paths are cited inline.  
> Template confirmed: **"Cunnet - Creative Portfolio Agency Nextjs Template"** by aqlova/ThemePure.  
> The site is a creative-agency / portfolio marketing template being adapted for **Crescita Software**.

---

## 1. Design System Extraction

### 1.1 Color Palette

Defined in `public/assets/scss/utils/_colors.scss` and written to CSS custom properties by `_root.scss`. Dark-mode overrides in `src/app/globals.scss` and `public/assets/scss/layout/pages/_dark.scss`.

| Token | Hex / Value | Role | Where defined |
|---|---|---|---|
| `--tp-common-black` | `#1e1e1e` | Primary text, dark backgrounds, button fills | `_colors.scss` |
| `--tp-common-white` | `#FFFFFF` | Reversed text, light surfaces | `_colors.scss` |
| `--tp-common-bubbles` | `#e1eeb7` | Shop CTA button (lime-green accent) | `_colors.scss` |
| `--tp-grey-1` | `#5e5959` | Body paragraph text | `_colors.scss` |
| `--tp-grey-2` | `#f3f3f3` | Grey button background | `_colors.scss` |
| `--tp-grey-3` | `#b6bcc6` | Dimmed/inactive text (reveal-text chars) | `_colors.scss` |
| `--tp-grey-4` | `#f6f6f6` | Light hero / section background | `_colors.scss` |
| `--tp-grey-5` | `#d7cdcd` | Shop hero subtitle | `_colors.scss` |
| `--tp-border-1` | `rgba(30,30,30,0.1)` | Default border color | `_colors.scss` |
| `--tp-theme-primary` | `#fa2837` | Accent/CTA red — buttons, hover states | `_colors.scss` |
| `--color-bg-section` (light) | `#09090b` | Section dark background (`.tp-section-bg`) | `globals.scss` |
| `--color-bg-section` (dark) | `#1e1e1e` | Same class, dark mode | `globals.scss` |
| `--color-bg-hero` (light) | `#f6f6f6` | Hero light background | `globals.scss` |
| `--color-bg-hero` (dark) | `#0E0F11` | Hero dark mode background | `globals.scss` |
| Gradient | `linear-gradient(90deg, #a020f0 0%, #00ffd1 100%)` | Text gradient (`.tp-textGradient` mixin) | `_mixins.scss` |
| Portfolio bg (dark section) | `#1e1e1e` | CreativeAgency portfolio hardcoded | `CreativeAgencyPortfolio.tsx` |

**Notable issues:**
- `--color-bg-section` light value is `#09090b` (near-black) but used on a page where body is white — this value appears to be a template leftover / incorrect default. The section component it affects is `.tp-section-bg`.
- The gradient (`#a020f0` → `#00ffd1`) appears in `_mixins.scss` as a mixin but no usage was found in SCSS components. It may be unused or available for future use.

### 1.2 Typography

**Font stack defined in `public/assets/scss/utils/_typography.scss`**

| Family | Cuts available | Weight | Loading method | Usage class |
|---|---|---|---|---|
| **Sequel Sans Medium Head** | Medium | 500 | `@font-face` local woff2 | `--tp-ff-heading` (h1–h6 default) |
| **Sequel Sans Roman Head** | Roman | normal | `@font-face` local woff2 | `--tp-ff-sequel-roman` |
| **Sequel Sans Bold Head** | Bold | 700 | `@font-face` local woff2 | `--tp-ff-sequel-bold-head` (hero display) |
| **Sequel Sans Semi Bold Head** | SemiBold | 600 | `@font-face` local woff2 | `--tp-ff-sequel-semi-bold` |
| **Sequel Sans Heavy Disp** | Heavy | 800 | `@font-face` local woff2 | `--tp-ff-sequel-heavy-disp` |
| **Inter** | Variable | 100–900 | `next/font/google` | `--tp-ff-body`, `--tp-ff-inter`, `--tp-ff-p` |
| **Jost** | Variable | 100–900 | `next/font/google` | `--tp-ff-jost` |

**Type scale (from `_theme.scss` and component SCSS)**

| Element | Size | Line height | Letter spacing | Font |
|---|---|---|---|---|
| `body` | 16px | 28px / 1.75 | — | Inter |
| `p` | 16px | 26px | — | Inter, color `#5e5959` |
| `h1` | 40px | 1.2 | — | Sequel Sans Medium |
| `h2` | 36px | 1.2 | — | Sequel Sans Medium |
| `h3` | 28px | 1.2 | — | Sequel Sans Medium |
| `h4` | 24px | 1.2 | — | Sequel Sans Medium |
| `h5` | 20px | 1.2 | — | Sequel Sans Medium |
| `h6` | 16px | 1.2 | — | Sequel Sans Medium |
| `.tp-section-title` | 82px | 107% | −2.1px | Sequel Sans Medium |
| `.tp-hero-title` (creative-agency) | 212px → 62px | 95% | −0.05em | Sequel Sans Bold |
| `.mp-hero-bigtitle` (modern-agency) | 430px → 80px | 1 | −0.04em | Sequel Sans Bold |
| `.cs-section-title` | 132px → 42px | 108% | −0.05em | Sequel Sans Bold |
| `.ca-section-title` | 60px → 35px | 117% | −0.03em | Sequel Sans SemiBold |
| Input placeholder | 14px | — | — | Inter |
| `.tp-hero-dec` | 18px | 156% | −0.03em | Inter, weight 500 |
| `.tp-section-subtitle` | 16px | — | −0.02em | Sequel Sans (inherits) |

**Heading hierarchy note:** The base `h1–h6` are generic resets at modest sizes (40px–16px). Actual display headings use specific utility classes (`.tp-section-title`, `.tp-hero-title`, etc.) that apply much larger sizes and tighter letter-spacing. The HTML heading level and the visual size are decoupled.

### 1.3 Spacing, Grid, Containers, Borders, Shadows

**Grid:** Bootstrap 5 12-column grid. Custom gutter overrides via `.gx-{5,10,20,30,40,45,50,60,70,80,90,100}` classes in `_common.scss`. On `≤xl`, gutters above `.gx-50` collapse to 30px.

**Container:** Standard Bootstrap `.container`. Two custom wide containers generated in `_common.scss`:
- `.container-1800` — max-width 1800px (≥1400px)
- `.container-1886` — max-width 1886px (≥1400px)

**Section padding:** Utility classes from `spacing.css` follow a `pt-{n}` / `pb-{n}` pattern in 5px increments. Common values in use: `pt-85`, `pt-120`, `pt-145`, `pb-60`, `pb-120`.

**Border radius:**
- Buttons (`.tp-btn`): `50px` (fully rounded pill) — `_buttons.scss`
- Card/thumb images: `6px`, `8px`, `16px` depending on context (hero gallery `6px`, shop thumb `16px`, branding studio hero `12px`)
- Magic cursor ball: `50%` (circle)

**Shadows:**
- `.mp-hero-magnetic-image`: `box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25)` — `_hero.scss`
- `.mg-hero-awards`: `box-shadow: inset 0 1px 10px 0 rgba(0,0,0,0.15)` — `_hero.scss`
- Video modal: `box-shadow: 0 0 20px rgba(0,0,0,0.5)` — `globals.scss`
- No global card shadow system. Components define shadows individually.

### 1.4 Buttons

All defined in `public/assets/scss/components/_buttons.scss`.

| Variant | Class | Background | Text color | Border | Padding | Notes |
|---|---|---|---|---|---|---|
| Default (black fill) | `.tp-btn` | `#1e1e1e` | `#FFFFFF` | none | `17px 25px` | Pill, font-size 16px, letter-spacing −0.05em |
| Grey | `.tp-btn.tp-btn-grey` | `#f3f3f3` | `#1e1e1e` | none | 17px 25px | |
| Grey 2 | `.tp-btn.tp-btn-grey-2` | `#f6f6f6` | `#1e1e1e` | none | 17px 25px | |
| Border (outline) | `.tp-btn.tp-btn-border` | transparent | `#1e1e1e` | `1px solid rgba(30,30,30,0.1)` | 17px 25px | |
| Border black | `.tp-btn.tp-btn-border-black` | transparent | `#1e1e1e` | `2px solid #1e1e1e` | `8px 18px` | Smaller, less padding |
| Border white | `.tp-btn.tp-btn-border-white` | transparent | `#FFFFFF` | `1px solid rgba(255,255,255,0.1)` | 17px 25px | |
| White fill | `.tp-btn.tp-btn-white` | `#FFFFFF` | `#1e1e1e` | none | 17px 25px | |
| White border | `.tp-btn.tp-btn-white-border` | transparent | `#FFFFFF` | `1px solid rgba(255,255,255,0.1)` | 17px 25px | |
| Red/accent | `.tp-btn.tp-btn-red` | `#fa2837` | `#FFFFFF` | none | 17px 25px | Used for contact form submit |
| XL | `.tp-btn.tp-btn-xl` | — | — | — | `18px 32px` | Size modifier |
| XXL | `.tp-btn.tp-btn-xxl` | — | — | — | `22px 32px` | Size modifier |
| Shop CTA | `.shop-btn` | `#e1eeb7` | `#1e1e1e` | none | `17px 33px` | |

**Hover state (all `.tp-btn`):** Text slides up (`.text-1` translateY −150%, `.text-2` slides in from bottom). Arrow icon translates diagonally. Transition duration: 0.3s. Defined in `_buttons.scss`.

**Button group (`.tp-btn-group`):** A 3-item group that animates on hover — first and last items scale from 0.5 to 1 while collapsing margins. Used in modern-agency and personal-portfolio pages.

### 1.5 Cards, Forms, Nav, Badges

**Cards:** No generic `.card` component. Each section has its own card-like layout (portfolio item, service item, team card, blog card). No shared card SCSS class.

**Forms:**
- Input height: `56px`, line-height `56px`
- Font size: `14px`
- Padding: `26px` horizontal
- Border: `1px solid #1e1e1e`
- Background: `#FFFFFF`
- Focus: border-color stays `#1e1e1e`, placeholder fades to opacity 0
- Labels: no `.form-label` class — bare `<label>` styled per-section
- Error messages: `.form-error` class — `font-size: 12px; color: red` (hardcoded `red`, not using `--tp-theme-primary`) — `globals.scss`
- Textarea: same border/padding, `line-height: 1.4`

**Navigation:**
- Desktop: horizontal pill-style menu items. Active state from `useHeaderMenu`.
- Mobile offcanvas: full-screen panel with accordion sub-menus.
- Sticky: floating hamburger button only (no sticky full nav bar).

**Badges / tags:** No formal badge system. Tag-style pills used in portfolio, hero social links, and blog tags are styled inline per-component (e.g., `border-radius: 20px; padding: 6px 20px` in `_hero.scss`).

### 1.6 Iconography and Imagery Style

- **Icons:** Font Awesome Pro (vendored CSS + webfonts). SVG icons defined as React components in `src/svg/` (ArrowIcons, StarIcons, SearchIcons, ServiceIcons, ShopIcons, etc.).
- **Imagery:** Photography-heavy. Categories: branding, fashion, editorial, product, architecture. All images are placeholder stock photos from the template.
- **Logo:** Dual logo support (`logo-1` light, `logo-2` dark). PNG format. `BrandLogo` component with configurable width/height.
- **WebGL displacement:** `/assets/img/imghover/fluid.jpg` used as displacement map for hover-effect.

### 1.7 Light / Dark Theme

**Light theme:** Default. Body background `#FFFFFF`, text `#1e1e1e`.

**Dark theme:** Activated by `.cunnet-dark` class on `<html>`. Background `#0E0F11`, surfaces `#1a1b1e` / `#1e1e1e`. Text `#FFFFFF`. Every dark-mode override is a flat selector list in `_dark.scss` — approximately 250+ individual property overrides. This is not a CSS variable token-swap but a direct property override per element class.

**Routing:** Light pages at `/creative-agency/*`, dark pages at `/dark/creative-agency/*`. They are separate routes, not toggled at runtime on the same URL. There is no toggle switch UI for the end-user — the intent is that the site owner picks one variant.

---

## 2. Page-by-Page UX Analysis

### `/creative-agency` — Default Home

| Order | Section | Purpose | Primary CTA |
|---|---|---|---|
| 1 | Hero | Full-height, agency brand statement + gallery thumbnails strip | "Explore All Work" → portfolio |
| 2 | About | Two-feature intro with images | Implied scroll-through |
| 3 | Services | Panel-pinned service list with hover image reveal (6 services) | "More Services" → /service |
| 4 | Portfolio | 4 portfolio items on dark `#1e1e1e` background | "All Portfolio" → /portfolio |
| 5 | Footer | CTA headline + quick links + email + social | "Get In Touch" → /contact-us |

**Content hierarchy:** H2 hero title (212px display) → H2 section titles (82px) → H4/H5 service/portfolio titles → body copy (16px/28px).

**Primary CTA:** "Explore All Work" in hero. Secondary: "Get In Touch" in footer.

### `/about-us`

| Order | Section | Purpose |
|---|---|---|
| 1 | Breadcrumb | Page location |
| 2 | About intro | Agency story, text perspective animation + marquee |
| 3 | Awards | Animated right-slide award list |
| 4 | Team | Team slider/grid |
| 5 | Footer | Standard footer CTA |

### `/service`

| Order | Section | Purpose |
|---|---|---|
| 1 | Breadcrumb | Page location |
| 2 | Service list | Panel-pinned service items (same pattern as home) |
| 3 | Footer | Standard footer CTA |

### `/portfolio` (and variants)

| Order | Section | Purpose |
|---|---|---|
| 1 | Breadcrumb | Page location |
| 2 | Filter tabs | "Design / Web / Motion / AI / All" tabs |
| 3 | Portfolio grid | 2/3/4-col filterable grid (Framer Motion transitions) |
| 4 | Footer | Standard footer CTA |

### `/contact-us`

| Order | Section | Purpose | Primary CTA |
|---|---|---|---|
| 1 | Breadcrumb | Page location | — |
| 2 | Top intro | Address, phone, email | — |
| 3 | Map + Form | Side-by-side map and contact form | "Contact Us" submit button |
| 4 | Footer | Standard footer | "Get In Touch" |

**Form note:** Submit fires `toast.success("Your message has been sent!")` with no actual sending (`ContactUsForm.tsx`).

### `/blog` (and variants)

Grid/list/standard variants share the same structure: breadcrumb → article grid/list → pagination → footer. Blog detail adds: postbox → comment section → comment form.

### `/pricing`

Monthly/yearly toggle → 3-tier pricing cards → CTA. Toggle managed with client-side state in `PricingArea.tsx`.

### `/career-details`

Sidebar pinned via GSAP `careerPinAnimation` on desktop (≥1200px). Main content scrolls while sidebar stays fixed.

### `/shop` pages

Standard e-commerce layout: product grid → cart → checkout with billing form. No backend — all forms are decorative.

---

## 3. Navigation & User Flows

### Header behavior

**Desktop (≥1200px):**
- Transparent header overlays hero section.
- Logo left, nav center (6-col), search + hamburger right.
- Sticky: after 20px scroll, a floating hamburger button appears (`#header-sticky`). The full nav bar does not become sticky.

**Mobile (<1200px):**
- Main nav hidden (`d-none`).
- Logo + hamburger only.
- Hamburger opens `OffCanvasPanel` (full-screen slide-in from right).

**Offcanvas content:**
- `OffCanvasPanel`: Full menu tree + image gallery (desktop only, `d-none d-xl-block`) + contact info + social links.
- `OffCanvasPanelTwo`: Simplified menu list used by some page variants.

**Search:** `HeaderSearch` renders a full-width search overlay toggled by `openSearch` state in `AppContext`. `SearchForm` has no backend.

### Footer navigation

Quick links + social links. All `QUICK_LINKS` and `SOCIAL_LINKS` in `CreativeAgencyFooter.tsx` link to `href="#"` — **none are wired to real routes.**

### Main user journeys

```mermaid
flowchart TD
    A[Landing: /creative-agency] -->|"Explore All Work"| B[/portfolio]
    A -->|"More Services"| C[/service]
    A -->|"Get In Touch" footer| D[/contact-us]
    B -->|click item| E[/portfolio-details]
    C -->|click service| F[/service-details]
    D -->|fill form + submit| G[toast.success — no real send]
    A -->|nav: About| H[/about-us]
    A -->|nav: Blog| I[/blog]
    I -->|click post| J[/blog-details]
    J -->|comment form| K[toast.success — no real send]
    A -->|nav: Career| L[/career]
    L -->|click job| M[/career-details]
    M -->|"Apply Now"| N[/job-application-form]
    N -->|submit| O[toast.success — no real send]
```

### Navigation gaps / dead ends

- All `QUICK_LINKS` and `SOCIAL_LINKS` in the footer link to `href="#"` — these need real routes (`src/data/footer-data.ts`).
- Hero buttons in `CreativeAgencyHero.tsx` link to `portfolio-light.html` and `contact-me-light.html` — these are **HTML file references from the original template, not Next.js routes**. They will 404.
- Portfolio items link to `/portfolio-details` (a valid route) but pass no item ID, so all items show the same generic detail page.

---

## 4. Animation & Motion Audit

| Location | Library | Trigger | Effect | Duration / Easing |
|---|---|---|---|---|
| Every page — `.tp_fade_anim` elements | GSAP | ScrollTrigger enter (top 85%) | Fade + directional translate | 0.75s, `power2.out` (configurable via `data-*`) |
| `/creative-agency` hero title | GSAP ScrollTrigger | Scroll scrub | Chars scatter upward from center (y: −220) | scrub |
| `/creative-agency` service panel | GSAP ScrollTrigger pin | Scroll | Panels pin-stack | scrub 1 |
| `/creative-agency` footer headline | GSAP | ScrollTrigger enter | Text 3D flip-in per line (rotationX −80°) | 1s, stagger 0.1 |
| `.text-scale-anim` (footer "Say Hello!", etc.) | GSAP | mouseenter per letter | scaleY 1.6 center, 1.3 adjacent | 0.4s, `sine.out` |
| All pages — `.reveal-text` | GSAP ScrollTrigger | Scroll scrub | Char opacity 0.3→1 + x shift | scrub 1 |
| All pages — `.anim-zoomin` | GSAP ScrollTrigger | Scroll enter | Scale 1.2→1, autoAlpha | 2s, `power2.out` |
| All pages — `.scale-up-img` | GSAP ScrollTrigger | Scroll scrub | Image scale →1.15 | scrub 1 |
| All pages — `.tp-title-text` | CSS (JS splits to spans) | CSS `--char` variable | Staggered char entrance | CSS transition |
| `/modern-agency` hero | GSAP rAF | mousemove | Magnetic image spring physics | rAF, elastic spring |
| `/modern-agency` hero text | GSAP ticker | Scroll velocity | Jump/bounce chars on scroll | 0.8s elastic.out(1,.5) |
| `/modern-agency` about thumbs | GSAP ScrollTrigger | Scroll enter | scaleX 0→1 reveal | 1s, `power2.out` |
| `/modern-agency` awards | GSAP ScrollTrigger | Scroll enter | x:300→0 slide in | 1s, stagger 0.2, `power3.out` |
| `/digital-studio` portfolio text | GSAP ScrollTrigger pin | Scroll scrub | Text pinned + zoom scale 1.2 | scrub 1 |
| `/digital-studio` images | GSAP ScrollTrigger | Scroll scrub | `data-value-1` → `data-value-2` scale | scrub |
| `/motion-graphic` sections | GSAP ScrollTrigger pin | Scroll | Panel-pin stack | scrub 1 |
| `/about-us`, `/portfolio-details-gallery` | GSAP ScrollTrigger | Scroll scrub | Horizontal marquee x: 35%→−200% | scrub |
| `/career-details` sidebar | GSAP ScrollTrigger pin | Scroll | Sidebar pinned | scrub 1 |
| Portfolio filter tabs (6 pages) | Framer Motion | Tab click | `AnimatePresence` fade opacity 0→1 | Not determined from code (default FM) |
| `TypewriterWords` component | Framer Motion | mount + interval | `<motion.b>` typewriter reveal | Not determined from code |
| `.tp-hover-img` (team, blog, portfolio) | hover-effect (Three.js) | mouseenter / mouseleave | WebGL fluid displacement | `speedIn/Out: 1`, `power2.out` |
| Hero gallery thumbnails | GSAP `.to` | mouseenter thumbnail | Background image swap opacity | 0.4s |
| CSS: `.rotate-infinite` | CSS keyframes | always | 360° rotation | 15s linear infinite |
| CSS: `levitate-lg` | CSS keyframes | always | translateY 0→30px | Not determined from code |
| CSS: `tpshake` | CSS keyframes | on-demand | translate + skew + rotate | Not determined from code |
| CSS: `animate-pulse` | CSS keyframes | always | box-shadow pulse | Not determined from code |
| Buttons `.tp-btn` | CSS transition | hover | Text slide + arrow diagonal translate | 0.3s |
| Cursor `#ball` | rAF (`cursorAnimation.ts`) | mousemove | Custom cursor follows pointer | rAF |
| Service items hover image | GSAP `.to` | mouseenter on service row | Image stack swap: opacity + y:200 + scale | 0.8s, `power3.out` |
| Hero background images | React state | mouseenter thumbnail | CSS opacity 0→1 inline style | instant (no transition set) |

### Motion consistency assessment

- **GSAP** is the dominant system and is well-organized through the `animationConfig.ts` routing map.
- **Easing consistency:** Most GSAP animations use `power2.out` or `power3.out`, which is cohesive. The magnetic and jump animations use elastic easing, which adds variety but is contextually appropriate.
- **Duration inconsistency:** Durations range from 0.3s (button hover) to 2s (image zoom-in). The 2s `imgZoomInAnimation` feels slow relative to others.
- **Framer Motion** is an isolated island — it uses default easing (not coordinated with GSAP easing vocabulary) for portfolio tab transitions.
- **Hero background image swap** (`CreativeAgencyHero.tsx`) uses React inline `style={{ opacity: ... }}` with no CSS `transition` property set — the swap is instant, unlike the GSAP-driven version in `heroScaleGallery`. Two competing implementations exist for the same UI element.

### `prefers-reduced-motion` handling

**Not implemented in custom code.** GSAP, Framer Motion, hover-effect, and all CSS keyframe animations run regardless of user preference. Only Bootstrap's utility classes and Font Awesome's icon animations respect `prefers-reduced-motion` (via their vendored CSS). This is a **High** severity accessibility issue.

---

## 5. Responsiveness

### Breakpoints

| Name | Range | Bootstrap equiv |
|---|---|---|
| `$xs` | ≤574.98px | xs |
| `$sm` | 576px–767px | sm |
| `$md` | 768px–991px | md |
| `$lg` | 992px–1199px | lg |
| `$xl` | 1200px–1399px | xl |
| `$xxl` | 1400px–1599px | xxl |
| `$x3l` | 1600px–1700px | — (custom) |
| `$x4l` | 1700px–1800px | — (custom) |

Source: `public/assets/scss/utils/_breakpoints.scss`

### Mobile behavior of key sections

| Section | Mobile behavior |
|---|---|
| Hero (`tp-hero-spacing`) | `height: auto` on `≤lg`. Gallery thumbnails strip hidden (`d-xl-none` Swiper shown instead) |
| Hero title `.tp-hero-title` | Scales from 212px → 62px at `$sm/$xs` |
| Main nav | Hidden below `xl` (1200px). Hamburger + offcanvas only |
| Service panel pin | Pin disabled below `1199px` (media query in `servicePanelPinAnim`) |
| Career sidebar pin | Pin disabled below `1200px` |
| Portfolio text zoom | Disabled below `1200px` |
| Magnetic hero | Disabled (GSAP matchMedia `min-width: 768px`) |
| Marquee animation | Uses `start: "-1000 0%"` which will activate earlier on mobile scroll |
| `gx-50` to `gx-100` | Collapse to `30px` at `≤xl` |
| `.mp-hero-bigtitle` | 430px → 80px |

### Layout breakage risks

1. **`clean` script uses `rm -rf`** — not a CSS risk but a tooling issue.
2. **Hero height `950px` fixed on `≥x3l`** — on 1600–1700px screens, very tall hero may feel excessive.
3. **`pt-145` padding utility** — on small screens, Bootstrap's default `.pt-*` classes may not have this value; check if `spacing.css` covers all values actually used.
4. **`ml-75`, `ml-60`, `ml-40`, `ml-100`** — custom margin-left utilities; not all have `@media` resets visible in scanned files. Some components add these inline as utility classes — they may overflow on mobile.

---

## 6. Accessibility Review

### Semantic HTML

- `<header>`, `<footer>`, `<main>`, `<nav>`, `<section>` elements are used. Good baseline.
- `<nav className="tp-mobile-menu-active">` in `PageHeader.tsx` is not labelled with `aria-label`. A page with both desktop and mobile nav has two `<nav>` elements — both need distinct labels.
- The sticky hamburger button `#header-sticky` has no `aria-label` attribute (`PageHeader.tsx`).
- Magic cursor `<div id="magic-cursor"><div id="ball">` has no `aria-hidden="true"`. It will be read by screen readers unnecessarily.

### Heading order

Display headings (212px, 132px hero titles) are rendered as `<h2>` in hero sections (`CreativeAgencyHero.tsx`). Page `<main>` contains no `<h1>` — the first heading in the DOM is an `<h2>`. This breaks heading hierarchy on most pages. Root `<title>` is set via `metadata`, but no visible `<h1>` exists.

### Alt text

- `next/image` is used with explicit `alt` props. Hero gallery items use descriptive alts: `alt="Branding"`, `alt="Fashion"` etc. (`CreativeAgencyHero.tsx`).
- `BrandLogo` renders images with `alt="Logo White"` / variant labels — acceptable.
- Some instances use `alt="Service Image"` (generic) in `CreativeAgencyService.tsx` — not descriptive.
- Portfolio items use title strings as alt text — reasonable.

### Color contrast

| Pair | Foreground | Background | Ratio (estimated) | WCAG AA (4.5:1) |
|---|---|---|---|---|
| Body text / page | `#5e5959` | `#FFFFFF` | ~5.7:1 | ✓ Pass |
| Headings / page | `#1e1e1e` | `#FFFFFF` | ~17:1 | ✓ Pass |
| White text on `.tp-btn` (black) | `#FFFFFF` | `#1e1e1e` | ~17:1 | ✓ Pass |
| White text on `.tp-btn-red` | `#FFFFFF` | `#fa2837` | ~3.6:1 | ✗ Fail AA |
| Black text on `.shop-btn` | `#1e1e1e` | `#e1eeb7` | ~8.5:1 | ✓ Pass |
| Grey text `.tp-grey-1` on hero bg | `#5e5959` | `#f6f6f6` | ~5.1:1 | ✓ Pass |
| Social pill links on hero | `#5e5959` | `#f6f6f6` | ~5.1:1 | ✓ Pass |
| Footer text on dark bg | `#FFFFFF` | `#1e1e1e` | ~17:1 | ✓ Pass |
| `.tp-grey-3` (reveal-text inactive) | `#b6bcc6` | `#FFFFFF` | ~2.4:1 | ✗ Fail AA |
| Dark mode grey text `rgba(255,255,255,0.6)` | ~`#999999` equiv | `#0E0F11` | ~4.6:1 | ✓ Marginal pass |

**Critical failure:** White text on the red `#fa2837` CTA button (`tp-btn-red`) fails WCAG AA contrast. This button is used for the contact form submit action.

**Critical failure:** Inactive reveal-text chars (`.tp-grey-3` = `#b6bcc6` on white) fail contrast badly. Text is partially invisible to low-vision users.

> Note: Full contrast validation requires manual testing with assistive technologies and expert accessibility review.

### Keyboard navigation

- All interactive elements (links, buttons, form inputs) are natively focusable.
- Focus styles: `a:focus { outline: none }` is set globally in `_theme.scss`. **This removes the default focus ring for all links.** Custom focus styles are not added. Keyboard users lose their focus indicator.
- The custom cursor (`#ball`, `mix-blend-mode: difference`) does not interfere with keyboard navigation.
- Offcanvas close buttons need visible focus states.
- `NiceSelect.tsx` (custom dropdown) uses `div`-based markup — keyboard navigability not confirmed from code.

### ARIA usage

- `aria-label="Close video modal"` on the video close button — `VideoProvider.tsx`. Good.
- `aria-label="Logo White"` — not ideal for an `alt` attribute (should describe image purpose).
- No `role="dialog"` on offcanvas panels.
- No `aria-expanded` on hamburger / accordion toggles visible in scanned headers.
- Magic cursor elements missing `aria-hidden="true"`.

### Form labels and error messages

- All form inputs have associated `<label>` elements above them (direct siblings, not `for`/`id` paired) — `ContactUsForm.tsx` example. The `for` / `id` pairing is absent, so programmatic label association is broken. Screen readers may not announce labels on focus.
- Error messages use `.form-error` class (12px, `color: red`). The error is rendered as a `<span>` after the input but without `role="alert"` or `aria-describedby` — errors are not announced to screen readers automatically.

---

## 7. Design Consistency

| Issue | Severity | Location |
|---|---|---|
| Hero BG image swap has two implementations: React state (instant) and GSAP `heroScaleGallery` (0.4s) — both present | Medium | `CreativeAgencyHero.tsx` + `useGsapAnimation.ts` |
| `color: red` hardcoded for form errors instead of using `--tp-theme-primary` (`#fa2837`) | Low | `globals.scss` `.form-error` |
| Footer `QUICK_LINKS` and `SOCIAL_LINKS` all link to `href="#"` | High (UX) | `src/data/footer-data.ts`, `CreativeAgencyFooter.tsx` |
| Hero CTAs link to `.html` files (`portfolio-light.html`, `contact-me-light.html`) — broken | High (UX) | `CreativeAgencyHero.tsx` |
| `--color-bg-section` at `:root` set to `#09090b` (near-black) in globals but page body is white | Medium | `globals.scss` |
| Section title has 3 separate classes (`.tp-section-title` 82px, `.ca-section-title` 60px, `.cs-section-title` 132px) with no single source of truth | Medium | `_section-title.scss` |
| Dark theme implemented as ~250 flat property overrides rather than CSS variable token-swap | Medium | `_dark.scss` |
| Button `.tp-btn-red` fails WCAG AA contrast | High (a11y) | `_buttons.scss` |
| `a:focus { outline: none }` removes all keyboard focus indicators | High (a11y) | `_theme.scss` |
| Form `<label>` elements lack `for`/`id` pairing | High (a11y) | all `src/components/form/*.tsx` |
| `prefers-reduced-motion` not respected for any custom animation | High (a11y) | `useGsapAnimation.ts`, `AnimationWrapper.tsx` |
| Portfolio items have duplicated titles in data (e.g., `"Dorma Tokyo"` appears twice, `"Digital platform"` used for multiple skew items) | Low | `portfolio-data.ts` |
| Template credit "Powered by ThemePure" still present in footer | High (branding) | `CreativeAgencyFooter.tsx` |
| Email in footer hardcoded as `cunnet@gmail.com` — template placeholder | High (branding) | `CreativeAgencyFooter.tsx` |
| Service data items 5–6 use the same image (`service-4.jpg`) | Low | `service-data.ts` |

---

## 8. Strengths

**Sophisticated animation system.** The `animationConfig.ts` + `AnimationWrapper.tsx` pattern is clean and extensible. Adding animations to a new page requires only adding a route key and an array of functions. Source: `src/config/animationConfig.ts`.

**SmartLink dark-theme routing.** The `SmartLink` component transparently handles `/dark` path prefixing, meaning all internal navigation Just Works in both themes without duplicating link logic in every component. Source: `src/components/common/SmartLink.tsx`.

**Custom cursor implementation.** The GSAP-driven magnetic cursor with `mix-blend-mode: difference` is a premium interactive detail. Source: `src/hooks/useCursorAndBackground.ts`, `public/assets/scss/components/_cursor.scss`.

**Rich type scale.** The combination of Sequel Sans (display) + Inter (body) creates strong typographic hierarchy. The extreme display sizes (212px hero title, 430px modern-agency title) are visually bold and well-controlled with responsive downsizing. Source: `_hero.scss`, `_section-title.scss`.

**GSAP ScrollSmoother.** Smooth scrolling with `smooth: 2` gives the site a premium feel on desktop. Source: `src/hooks/useScrollSmooth.ts`.

**Button hover micro-interactions.** The dual-span text swap (`.text-1` / `.text-2`) and diagonal arrow translate on all `.tp-btn` elements is a polished, consistent hover pattern. Source: `_buttons.scss`.

**Dark theme coverage.** Despite being a flat override approach, `_dark.scss` achieves thorough coverage of all major UI states including offcanvas, forms, shop, blog, and cart. Source: `_dark.scss`.

**Hero gallery UX.** The hover-to-preview thumbnail strip with full-screen background swap on the creative-agency hero is a distinctive and engaging pattern. Source: `src/components/hero/CreativeAgencyHero.tsx`.

---

## 9. Weaknesses & Risks

| Risk | Priority | Detail | Source |
|---|---|---|---|
| **Broken hero CTAs (`.html` links)** | High | Hero "Explore All Work" → `portfolio-light.html`, "Contact Me" → `contact-me-light.html`. These 404 on any deployment. | `CreativeAgencyHero.tsx` |
| **Forms send nothing** | High | All 15 forms fire only `toast.success()` with no HTTP request. Contact, job applications, auth — all dead. | `src/components/form/*.tsx` |
| **Template branding not removed** | High | "Powered by ThemePure", `cunnet@gmail.com`, title "Cunnet - Creative Portfolio Agency Nextjs Template" still in production code. | `CreativeAgencyFooter.tsx`, `layout.tsx` |
| **`prefers-reduced-motion` ignored** | High | All GSAP, Framer Motion, CSS keyframe, and hover-effect animations run regardless of OS accessibility setting. Legal risk in some jurisdictions. | `useGsapAnimation.ts`, `globals.scss` |
| **Focus rings removed globally** | High | `a:focus { outline: none }` destroys keyboard navigation indicator. WCAG 2.4.7 failure. | `_theme.scss` |
| **White-on-red contrast failure** | High | `.tp-btn-red` (contact form submit) is WCAG AA non-compliant. | `_buttons.scss` |
| **hover-effect (Three.js) bundle size** | High | Imports Three.js (~500KB+ gzipped). Active on team, blog, and 3 portfolio pages. Massive performance cost. | `useGsapAnimation.ts`, package.json |
| **`windows: clean` script broken** | Medium | `rm -rf` on Windows PowerShell silently fails or errors. | `package.json` |
| **Footer links all `href="#"`** | Medium | Quick links and social links are non-functional. Damages SEO and UX. | `footer-data.ts` |
| **Framer Motion + GSAP duplication** | Medium | Both ship in the bundle. Framer Motion (~50KB) is used for a `fade in/out` that GSAP's `AnimatePresence` equivalent could handle trivially. | `PortfolioArea.tsx` (×6) |
| **Dark theme as flat override sheet** | Medium | ~250 individual overrides in `_dark.scss` instead of CSS variable token-swap. Every new component needs a manual dark addition. | `_dark.scss` |
| **No backend / API routes** | Medium | The site cannot accept contact messages, job applications, logins, or orders. Entire form UX is decorative. | All form components |
| **Form label `for`/`id` missing** | Medium | Screen reader label association is broken on all 15 forms. | `src/components/form/*.tsx` |
| **GSAP Club plugins (ScrollSmoother, SplitText)** | Medium | These are members-only GSAP plugins. Distribution in a template could violate GSAP's licence terms. Verify licence. | `useScrollSmooth.ts`, `useGsapAnimation.ts` |
| **Portfolio detail page has no data routing** | Medium | All portfolio items link to `/portfolio-details` with no query param or slug. Single generic page for all projects. | `portfolio-data.ts`, portfolio components |
| **`og:` meta tags absent** | Low | No OpenGraph or Twitter Card metadata. Social sharing shows no preview. | `layout.tsx` |
| **Font Awesome Pro vendored without visible licence** | Low | FA Pro requires a paid licence. Vendored CSS/webfonts included; licence file not present in repo. | `public/assets/css/font-awesome-pro.css` |
| **Sequel Sans proprietary fonts** | Low | 5 custom font files included. Sequel Sans is a commercial font; licence must be owned for the target domain. | `public/assets/fonts/` |
| **`preload: false` on web fonts** | Low | Inter and Jost will cause a FOUT (flash of unstyled text) on first load. | `layout.tsx` |
| **Static data in code** | Low | All content (services, portfolio, team, etc.) is hardcoded in TypeScript files. No CMS. Content changes require developer involvement. | `src/data/*.ts` |

---

## 10. Redesign / Improvement Recommendations

Prioritised. **Effort:** S = <2h, M = 2–8h, L = >1 day.

### P1 — Critical fixes (blockers before any real launch)

| # | Action | Effort | Files affected |
|---|---|---|---|
| 1 | **Fix hero CTA links** — change `portfolio-light.html` → `/portfolio` and `contact-me-light.html` → `/contact-us` | S | `CreativeAgencyHero.tsx` |
| 2 | **Wire contact form to a real backend** — integrate EmailJS, Resend, Formspree, or a Next.js API route | M | `src/components/form/ContactUsForm.tsx`, `ContactMeForm.tsx` |
| 3 | **Remove template branding** — replace "Powered by ThemePure", `cunnet@gmail.com`, page `<title>` with Crescita Software content | S | `CreativeAgencyFooter.tsx`, `src/app/layout.tsx` |
| 4 | **Fix footer links** — wire `QUICK_LINKS` and `SOCIAL_LINKS` to real routes/URLs | S | `src/data/footer-data.ts` |
| 5 | **Restore focus styles** — replace `a:focus { outline: none }` with a visible custom focus style | S | `public/assets/scss/theme/_theme.scss` |
| 6 | **Fix `.tp-btn-red` contrast** — lighten or darken background so white text passes 4.5:1. `#c41e2a` achieves ~5.1:1. | S | `public/assets/scss/components/_buttons.scss` |

### P2 — High-value improvements

| # | Action | Effort | Files affected |
|---|---|---|---|
| 7 | **Add `prefers-reduced-motion` guard** to `AnimationWrapper.tsx` — wrap all GSAP init in `if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)` | M | `src/components/shared/animation/AnimationWrapper.tsx`, `src/hooks/useGsapAnimation.ts` |
| 8 | **Fix form label `for`/`id` pairing** — add `id` to each input, matching `htmlFor` on its label | M | all `src/components/form/*.tsx` |
| 9 | **Add `role="alert"` to error messages** — or use `aria-describedby` on inputs | S | all `src/components/form/*.tsx` |
| 10 | **Add OpenGraph metadata** — add `og:title`, `og:description`, `og:image` to root and page-level metadata | S | `src/app/layout.tsx`, per-page `metadata` exports |
| 11 | **Add `aria-hidden="true"` to cursor elements** — and `aria-label` to hamburger buttons | S | `CreativeAgencyLayout`, `PageHeader.tsx`, `layouts/headers/` |
| 12 | **Replace Framer Motion with GSAP** for portfolio tab transitions — removes 50KB from bundle, unifies animation system | M | `PortfolioArea.tsx`, `PortfolioTwoArea.tsx` (×6 files) |
| 13 | **Add `<h1>` to each page** — current pages start at `<h2>`. Either change hero title semantic level or add a visually hidden `<h1>`. | M | all page components in `src/app/(light)/` |

### P3 — Design polish

| # | Action | Effort | Files affected |
|---|---|---|---|
| 14 | **Replace static data with a headless CMS** (Sanity, Contentful, or local MDX) for services, portfolio, blog, team | L | `src/data/*.ts`, all consuming components |
| 15 | **Implement portfolio detail routing** — add `[slug]` dynamic route and pass ID from portfolio items | M | `src/app/(light)/(portfolios)/portfolio-details/`, `portfolio-data.ts` |
| 16 | **Refactor dark theme to CSS variable token-swap** — define light/dark values as CSS vars at `:root` / `[data-theme="dark"]`, eliminating `_dark.scss` flat overrides | L | `globals.scss`, `_dark.scss`, all component SCSS |
| 17 | **Evaluate removing hover-effect (Three.js)** — replace WebGL displacement with a CSS `filter: blur` + scale approach or a GSAP-based reveal. Saves ~500KB. | M | `src/hooks/useGsapAnimation.ts` (`tpHoverWebGL`), `package.json` |
| 18 | **Fix `--color-bg-section` default value** — change `:root` value from `#09090b` to something appropriate for light mode | S | `src/app/globals.scss` |
| 19 | **Add `sitemap.xml` and `robots.txt`** | S | `src/app/sitemap.ts`, `src/app/robots.ts` (Next.js conventions) |
| 20 | **Consolidate section-title classes** into a single system (one class + modifiers) | M | `_section-title.scss`, all page components |

---

## 11. Design Handoff Notes

### Safe to change

| What | Where | How |
|---|---|---|
| Brand colors | `public/assets/scss/utils/_colors.scss` | Edit the Sass `$colors` map. All `--tp-*` CSS vars regenerate automatically. Also update `globals.scss` `--color-bg-section` and `--color-bg-hero`. |
| Accent/CTA color | `$colors > theme > primary: #fa2837` | Change in `_colors.scss`. Affects all `.tp-btn-red`, `.tp-theme-primary` usages. |
| Body font | `$font-family > ff > body` in `_typography.scss` + `inter` in `layout.tsx` | Change both places. |
| Display font | `$font-family > ff > heading` in `_typography.scss` | Change the Sequel Sans `@font-face` entries and the map values. |
| Section headings content | Hardcoded strings in page components | Edit directly in `src/app/(light)/(homes)/creative-agency/page.tsx` and section components. |
| Service list | `src/data/service-data.ts` | Edit items 1–6 for the creative-agency home. |
| Portfolio items | `src/data/portfolio-data.ts` | Replace items 1–4 for the home portfolio section. |
| Team data | `src/data/team-data.ts` | Replace member objects. |
| Footer links / email | `src/data/footer-data.ts` + `src/layouts/footers/CreativeAgencyFooter.tsx` | Update `QUICK_LINKS`, `SOCIAL_LINKS`, and the `href="mailto:..."` value. |
| Logo files | `public/assets/img/logo/` | Replace `logo.png` and `logo-white.png` with same filenames. |
| Hero images | `public/assets/img/hero/` | Replace `thumb.jpg` through `thumb-9.jpg`. The component maps these by array index. |
| Page `<title>` and description | `src/app/layout.tsx` (root), per-page `metadata` exports | Update `metadata` object. |
| Button sizing variants | `public/assets/scss/components/_buttons.scss` | The `.tp-btn-xl` and `.tp-btn-xxl` modifiers control padding. |
| Spacing values | `public/assets/css/spacing.css` | Utility classes like `pt-145` are generated here. |

### Do not touch without understanding

| What | Why |
|---|---|
| `src/hooks/useGsapAnimation.ts` | Modifying CSS class names (e.g., `.tp-panel-pin`, `.tp-title-middle-animetion`) here will break animations on affected pages. |
| `src/config/animationConfig.ts` | Route strings must exactly match Next.js pathnames. Wrong routes silently skip animations. |
| `src/hooks/useScrollSmooth.ts` | Changing `smooth` value or removing `#smooth-wrapper / #smooth-content` structure will break all ScrollTrigger offsets across the site. |
| `src/components/common/SmartLink.tsx` | Changing the `/dark` prefix logic will break all internal navigation on dark-theme pages. |
| `public/assets/scss/layout/pages/_dark.scss` | This file is ~800 lines of flat overrides. Changing a component class name anywhere in the SCSS requires a matching change here. |
| `public/assets/fonts/` | Sequel Sans is proprietary. Do not redistribute or substitute without verifying licence. |
| GSAP ScrollSmoother / SplitText imports | These are GSAP Club plugins. Changing import paths or versions may break if the Club licence lapses. |
| Bootstrap vendored CSS | The project uses a vendored Bootstrap build, not the npm package source. Do not also `@import 'bootstrap'` from npm — it will double-load. |

### What to avoid

- Do not add `position: fixed` elements without accounting for GSAP ScrollSmoother — fixed position behaves differently inside the smooth wrapper.
- Do not add CSS `transition` on heading elements without checking if a GSAP animation also targets them — the two will conflict.
- Do not use `document.querySelector` outside of GSAP hooks — Next.js SSR will error. Always wrap in `useEffect` or `"use client"`.

---

## 12. Open Questions

1. **Which home variant is the final one for Crescita Software?** All 11 light variants are present. Only one should ship; the rest add dead weight and confusion.

2. **Is the shop section relevant to Crescita Software?** The `agency-shop`, cart, checkout, wishlist, and shop routes appear to be a template bonus section with no obvious relevance to a software agency. Should they be removed?

3. **Auth pages (`/login`, `/register`, `/forgot`) — is there a planned user account feature?** Currently they are decorative. If not planned, remove them; if planned, what auth provider will be used?

4. **What backend will power the contact form?** EmailJS (no-server), Resend/Mailgun (server-side), or a form service (Formspree, Netlify Forms)?

5. **Are the GSAP Club plugins (ScrollSmoother, SplitText) licensed for this deployment domain?** These require an active GSAP Club membership or a business licence tied to the deployed URL.

6. **Are the Sequel Sans fonts licensed for web use on the Crescita Software domain?** The fonts came with the template but web font licences are typically per-domain.

7. **Is Font Awesome Pro licensed for this project?** FA Pro requires a paid kit; the vendored CSS/webfont files are present but no kit script or licence file is in the repo.

8. **Is there a CMS planned, or will content continue to be managed in TypeScript data files?** If a CMS is planned, the data layer (`src/data/*.ts`) needs to be replaced with API calls before content volume grows.

9. **What is the intended SEO strategy?** Currently there are no `og:` tags, no `robots.txt`, no `sitemap.xml`, and the `<title>` still says "Cunnet - Creative Portfolio Agency Nextjs Template".

10. **Should the dark theme be preserved as a selectable option for visitors, or is it only used during development as a design preview?** Currently there is no toggle UI — the choice is hard-coded via URL path.

export const ALLOWED_FILE_TYPES: Record<string, string> = {
  pdf: 'application/pdf',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
}
export const ALLOWED_EXTENSIONS = Object.keys(ALLOWED_FILE_TYPES)
export const MAX_FILE_BYTES = 5 * 1024 * 1024
export const MAX_TEXT_LENGTH = 300
export const MAX_TEXTAREA_LENGTH = 5000
export type FormFieldRow = {
  label: string
  key: string
  type: 'text' | 'email' | 'textarea' | 'select' | 'file'
  required?: boolean | null
  width?: 'half' | 'full' | null
  options?: { option: string }[] | null
}

export const DEFAULT_FORM_FIELDS: FormFieldRow[] = [
  { label: 'Your Name', key: 'name', type: 'text', required: true, width: 'half' },
  { label: 'Your Email address', key: 'email', type: 'email', required: true, width: 'half' },
  { label: 'Why you decided to apply here and why should we select you?', key: 'motivation', type: 'textarea', required: true, width: 'full' },
  { label: 'Tell us about a project you felt proud of', key: 'project', type: 'textarea', required: false, width: 'full' },
  { label: 'Share your portfolio (Behance, Dribbble, etc.)', key: 'portfolio', type: 'textarea', required: true, width: 'full' },
  { label: 'Your current salary & expected salary', key: 'salary', type: 'textarea', required: true, width: 'full' },
  { label: 'Upload your CV', key: 'cv', type: 'file', required: true, width: 'full' },
]
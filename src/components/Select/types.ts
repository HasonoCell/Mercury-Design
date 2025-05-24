export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface SelectProps {
  modelValue: string
  options: SelectOption[]
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
}

export interface SelectEmits {
  (e: 'change', value: string): void
  (e: 'update:modelValue', value: string): void
  (e: 'visible-change', value: boolean): void
  (e: 'clear'): void
}

export interface SelectStates {
  inputValue: string
  selectedOption: null | SelectOption
  mouseHover: boolean
}

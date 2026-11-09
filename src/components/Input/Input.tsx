import styles from './Input.module.scss'
import type {ComponentProps} from "react";

interface InputProps {
  type: ComponentProps<'input'>['type'],
  name: ComponentProps<'input'>['name'],
  placeholder: string,
  title: string,
  pattern: string,
  required: boolean
}

const Input = (props: InputProps) => {
  const {
    type,
    name,
    placeholder,
    title,
    pattern,
    required
  } = props

  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
      title={title}
      pattern={pattern}
      required={required}
    />
  )
}

export default Input
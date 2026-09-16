import styles from './Input.module.scss'

const Input = (props) => {
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
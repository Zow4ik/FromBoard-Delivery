import styles from './Input.module.scss'

const Input = (props) => {
  const {
    type,
    name,
    placeholder,
  } = props

  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  )
}

export default Input
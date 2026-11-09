import styles from './ContactPhone.module.scss'

const ContactPhone = () => {
  return (
    <div>
      <a
        className={styles.link}
        href="tel:78001234567"
      >+7 (800) 123 45-67</a>
      <p className={styles.text}>
        Звонки по России бесплатны
      </p>
    </div>
  )
}

export default ContactPhone
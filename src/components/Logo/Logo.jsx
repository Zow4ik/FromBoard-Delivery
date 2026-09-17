import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <a href='/' className={styles.link}>
      <img
        className={styles.logo}
        src="/FromBoard-Delivery/images/logo.svg"
        alt="FromBoard Delivery"
        width="305"
        height="74"
        loading="lazy"
      />
      <span>FromBoard Delivery</span>
    </a>
  )
}

export default Logo
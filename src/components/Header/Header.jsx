import styles from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.containerTop}></div>
        <div className={styles.containerBottom}></div>
      </div>
    </header>
  )
}

export default Header
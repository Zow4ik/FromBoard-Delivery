import styles from './Menu.module.scss'

const Menu = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href='#calculator'>Калькулятор</a>
        </li>
        <li className={styles.item}>
          <a href='#about'>О нас</a>
        </li>
        <li className={styles.item}>
          <a href='#guarantees'>Гарантии</a>
        </li>
        <li className={styles.item}>
          <a href='#reviews'>Отзывы</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
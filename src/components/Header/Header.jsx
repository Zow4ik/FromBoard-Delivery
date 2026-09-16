import styles from './Header.module.scss'
import Logo from '@/components/Logo/Logo.jsx'
import PriceDelivery from '@/components/PriceDelivery/PriceDelivery.jsx'
import ContactPhone from '@/components/ContactPhone/ContactPhone.jsx'
import Menu from '@/components/Menu/Menu.jsx'
import Button from '@/components/Button/Button.jsx'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.containerTop}>
          <Logo />
          <div className={styles.containerInfo}>
            <PriceDelivery />
            <ContactPhone />
          </div>
        </div>
        <div className={styles.containerBottom}>
          <Menu />
          <Button type='submit'>Оставить заявку</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
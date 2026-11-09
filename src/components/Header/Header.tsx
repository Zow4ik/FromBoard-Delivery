import styles from './Header.module.scss'
import Logo from '@/components/Logo/Logo.tsx'
import PriceDelivery from '@/components/PriceDelivery/PriceDelivery.tsx'
import ContactPhone from '@/components/ContactPhone/ContactPhone.js'
import Menu from '@/components/Menu/Menu.tsx'
import Button from '@/components/Button/Button.tsx'

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
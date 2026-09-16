import styles from './Header.module.scss'
import Logo from '@/components/Logo/Logo.jsx'
import PriceDelivery from '@/components/PriceDelivery/PriceDelivery.jsx'
import ContactPhone from '@/components/ContactPhone/ContactPhone.jsx'

const Header = () => {
  return (
    <header>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.containerTop}>
          <Logo />
          <div className={styles.containerInfo}>
            <PriceDelivery />
            <ContactPhone />
          </div>
        </div>
        <div className={styles.containerBottom}></div>
      </div>
    </header>
  )
}

export default Header
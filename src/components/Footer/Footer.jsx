import styles from './Footer.module.scss'
import Logo from '@/components/Logo/Logo.jsx'
import Menu from '@/components/Menu/Menu.jsx'
import ContactPhone from '@/components/ContactPhone/ContactPhone.jsx'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.containerTop}>
          <div className={styles.logo}>
            <Logo />
            <p className={styles.logoText}>
              2023© Ни одно право не защищено, копируйте сколько влезет
            </p>
          </div>
          <Menu />
          <ContactPhone />
        </div>
        <div className={styles.containerBottom}>
          <p className={styles.copyright}>
            НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ. Просим обратить внимание на то, что
            цены носят информационный и ознакомительный характер, а значит ни
            в какой мере не являются публичной офертой, которая определена в
            ст. 437 ГК РФ. Вся информация на сайте может содержать неточности,
            орфографические и иные ошибки, она не является полной, окончательно
            и исчерпывающей
          </p>
          <p className={styles.author}>
            Разработкой макета занимался Васильев Александр | Что-то на IT’шном
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import styles from './Welcome.module.scss'
import Title from '@/components/Title/Title.jsx'
import Calculator from '@/components/Calculator/Calculator.jsx'

const Welcome = () => {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.content}>
        <Title type='h1' weight='900'>
          Без проблемная доставка купленных вещей из США, Европы и Азии в Россию
        </Title>
        <p className={styles.text}>
          Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис
          позволяет вам легко и удобно заказывать товары со всего мира и
          получать их в России
        </p>
        <img
          className={styles.image}
          src="/FromBoard-Delivery/images/content-1.webp"
          alt="image"
          width="756"
          height="352"
          loading="lazy"
        />
      </div>
      <Calculator />
    </section>
  )
}

export default Welcome
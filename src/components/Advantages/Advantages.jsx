import styles from './Advantages.module.scss'
import Title from '@/components/Title/Title.jsx'
import AdvantageItem from '@/components/AdvantageItem/AdvantageItem.jsx'

const Advantages = () => {
  const AdvantagesInfo = [
    {
      url: '/FromBoard-Delivery/images/advantage-1.svg',
      title: 'Растоможка груза',
      text:
        'Мы берём на себя все формальности и бумажную ' +
        'волокиту, связанную с растаможкой груза'
    },
    {
      url: '/FromBoard-Delivery/images/advantage-2.svg',
      title: 'Надёжная упаковка',
      text: 'Все товары упаковываются нашими специалистами с особым ' +
        'вниманием к деталям, гарантируя, что они дойдут ' +
        'в безопасности и в отличном состоянии'
    },
    {
      url: '/FromBoard-Delivery/images/advantage-3.svg',
      title: 'Быстро и выгодно',
      text: 'Мы предлагаем быструю и выгодную доставку, чтобы вы ' +
        'могли насладиться покупками как можно скорее.'
    },
    {
      url: '/FromBoard-Delivery/images/advantage-4.svg',
      title: 'Удобный сервис',
      text: 'Стремимся сделать процесс доставки максимально удобным' +
        'для вас, чтобы опыт остался приятным и беззаботным'
    },
    {
      url: '/FromBoard-Delivery/images/advantage-5.svg',
      title: 'Прозрачность работы',
      text: 'Мы предоставляем полный контроль над каждым' +
        'этапом доставки, от момента заказа до момента прибытия заказа'
    },
    {
      url: '/FromBoard-Delivery/images/advantage-6.svg',
      title: 'Страхование груза',
      text: 'Наше страхование обеспечивает полную защиту и покрытие ' +
        'почти все неприятные и неожиданные ситуации'
    },
  ]

  return (
    <section className={`container ${styles.section}`}>
      <Title type='h2' weight='900'>Наши преимущества</Title>
      <ul className={styles.list}>
        {AdvantagesInfo.map((item) => (
          <AdvantageItem
            url={item.url}
            title={item.title}
            text={item.text}
            key={item.title}
          />
        ))}
      </ul>
    </section>
  )
}

export default Advantages
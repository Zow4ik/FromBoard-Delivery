import styles from './Guarantees.module.scss'
import Title from '@/components/Title/Title.jsx'
import Button from '@/components/Button/Button.jsx'
import GuaranteeItem from '@/components/GuaranteeItem/GuaranteeItem.jsx'

const Guarantees = () => {
  const GuaranteesInfo = [
    { url: '/FromBoard-Delivery/images/document-ru.webp', title: 'Свидетельство о регистрации в РФ' },
    { url: '/FromBoard-Delivery/images/document-us.webp', title: 'Свидетельство о регистрации в США' },
    { url: '/FromBoard-Delivery/images/document-cn.webp', title: 'Свидетельство о регистрации в Китае' },
    { url: '/FromBoard-Delivery/images/document-uk.webp', title: 'Свидетельство о регистрации в Великобритнии' },
  ]

  return (
    <section className={`container ${styles.section}`}>
      <Title type='h2' weight='900'>
        Гарантии качества
      </Title>
      <p className={styles.text}>
        Наши гарантии качества включают в себя полный спектр документов,
        необходимых для ввоза и вывоза товаров, а также для успешного бизнеса
        на мировом рынке. Мы предоставляем вам надёжность и уверенность
      </p>
      <ul className={styles.list}>
        {GuaranteesInfo.map((item) => (
          <GuaranteeItem
            url={item.url}
            title={item.title}
            key={item.title}
          />
        ))}
      </ul>
      <div>
        <Button type='button'>Показать больше документов</Button>
      </div>
    </section>
  )
}

export default Guarantees
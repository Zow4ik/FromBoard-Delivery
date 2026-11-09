import styles from './PriceDelivery.module.scss'

const PriceDelivery = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Доставляем товары из заграницы в Россию
      </p>
      <p className={styles.text}>
        Стоимость от 550 рублей за заказ
      </p>
      <p className={styles.text}>
        1 $ = 93 ₽ | 1 € = 99₽ | 1 ¥ = 13₽
      </p>
    </div>
  )
}

export default PriceDelivery
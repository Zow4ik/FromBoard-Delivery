import Title from '@/components/Title/Title.jsx'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Reviews.module.scss'

const Reviews = () => {
  const slidersInfo = [
    { text: 'Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких‑либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным', author: 'Анна' },
    { text: 'lorem1203 lorem1203 lorem1203 lorem1203 lorem1203 lorem1203 lorem1203', author: 'Артем' },
    { text: 'lorem1203 lorem1203 lorem1203 lorem1203 lorem1203 lorem1203 lorem1203', author: 'Василиса' },
    { text: 'lorem1203 lorem1203 lorem1203 lorem1203 lorem1203 lorem1203 lorem1203', author: 'Роман' },
    { text: 'eqweqw eqweqwe eqweqw eqweqwe eqweqw eqweqwe eqweqw eqweqwe ', author: 'Даниэль' },
    { text: 'dasdsa asd asd asd asd wqe qwe qwedasd asd asd asd asd as dsa', author: 'Дмитрий' },
  ]

  return (
    <section className={`container ${styles.section}`}>
      <Title type='h2' weight='900'>Отзывы</Title>
      <Swiper
        className={styles.slider}
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {slidersInfo.map((slide) => (
          <SwiperSlide className={styles.slide}>
            <p className={styles.text}>
              {slide.text}
            </p>
            <span className={styles.author}>
              {slide.author}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Reviews
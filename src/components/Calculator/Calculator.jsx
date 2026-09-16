import styles from './Calculator.module.scss'
import Title from '@/components/Title/Title.jsx'
import Input from '@/components/Input/Input.jsx'
import Button from '@/components/Button/Button.jsx'
import {useRef} from 'react'

const Calculator = () => {
  const formRef = useRef('')

  const inputsInfo = [
    { type: 'text', name: 'nameUser', placeholder: 'Имя', title: 'Только буквы, пробелы и дефисы (мин. 2 символа)', pattern: '^[A-Za-zА-Яа-яЁё\\s\\-]{2,}$' },
    { type: 'email', name: 'email', placeholder: 'Почта', title: 'Введите корректный email (например, mail@example.com)', pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$' },
    { type: 'tel', name: 'tel', placeholder: 'Телефон', title: 'Только цифры, пробелы, плюс, скобки и дефисы (10-20 символов)', pattern: '^[0-9\\\\s]{10,20}$' },
    { type: 'text', name: 'square', placeholder: 'Общая площадь, м²', inputMode: 'decimal', title: 'Введите число (целое или десятичное)', pattern: '^\\d+([.,]\\d+)?$' },
    { type: 'text', name: 'weight', placeholder: 'Вес, кг', inputMode: 'decimal', title: 'Введите число (целое или десятичное)', pattern: '^\\d+([.,]\\d+)?$' },
    { type: 'text', name: 'fromCountry', placeholder: 'Страна покупки', title: 'Только буквы, пробелы и дефисы', pattern: '^[A-Za-zА-Яа-яЁё\\s\\-]+$' },
    { type: 'text', name: 'toCountry', placeholder: 'Город покупки', title: 'Только буквы, пробелы и дефисы', pattern: '^[A-Za-zА-Яа-яЁё\\s\\-]+$' },
    { type: 'text', name: 'toArea', placeholder: 'Область доставки', title: 'Только буквы, пробелы и дефисы', pattern: '^[A-Za-zА-Яа-яЁё\\s\\-]+$' },
    { type: 'text', name: 'toCity', placeholder: 'Город доставки', title: 'Только буквы, пробелы и дефисы', pattern: '^[A-Za-zА-Яа-яЁё\\s\\-]+$' },
  ]

  const onSubmit = (event) => {
    event.preventDefault()

    const dataForm = new FormData(formRef.current)
    console.log(Object.fromEntries(dataForm))
    alert('данные собраны')
  }

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <Title type='h2' weight='700'>
          Калькулятор доставки
        </Title>
        <p className={styles.text}>
          Посчитайте, сколько будет стоить перевозка покупки из зарубежа
        </p>
        <form
          ref={formRef}
          onSubmit={(event) => onSubmit(event)}
          className={styles.form}
        >
          {inputsInfo.map((item) => (
            <Input
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              key={item.name}
              title={item.title}
              pattern={item.pattern}
              required={true}
            />
          ))}
          <Button type='submit'>Заказать расчёт</Button>
        </form>
      </div>
    </article>
  )
}

export default Calculator
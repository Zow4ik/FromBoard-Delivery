import styles from './Calculator.module.scss'
import Title from '@/components/Title/Title.jsx'
import Input from '@/components/Input/Input.jsx'
import Button from '@/components/Button/Button.tsx'
import {type ComponentProps, type SubmitEvent, useRef} from 'react'

interface InputsInfo {
  type: ComponentProps<'input'>["type"],
  name: ComponentProps<'input'>["name"],
  placeholder: string,
  title: string,
  pattern: string,
  inputMode?: string
}

const Calculator = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const inputsInfo: InputsInfo[] = [
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

  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formRef.current) {
      console.log('ошибка с рефом в Calculator.tsx')
      return
    }

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
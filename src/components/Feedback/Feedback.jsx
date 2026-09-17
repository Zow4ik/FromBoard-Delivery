import styles from './Feedback.module.scss'
import Title from '@/components/Title/Title.jsx'
import Input from '@/components/Input/Input.jsx'
import Button from '@/components/Button/Button.jsx'
import {useRef} from 'react'

const Feedback = () => {
  const formRef = useRef(null)

  const inputsInfo = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'Имя',
      title: 'Введите ваше имя (только буквы)',
      pattern: '^[А-Яа-яЁёA-Za-z\\s]+$'
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Почта',
      title: 'Введите корректный email адрес',
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'
    },
    {
      type: 'tel',
      name: 'tel',
      placeholder: 'Телефон',
      title: 'Введите номер телефона (только цифры)',
      pattern: '^[0-9+]{10,15}$'
    },
    {
      type: 'text',
      name: 'theme',
      placeholder: 'Тема вопроса',
      title: 'Кратко опишите тему',
      pattern: '.{3,}'
    },
  ]

  const onSubmit = (event) => {
    event.preventDefault()

    const dataForm = new FormData(formRef.current)
    console.log(Object.fromEntries(dataForm))
    alert('данные собраны')
  }

  return (
    <section className={`container ${styles.section}`}>
      <Title type='h2' weight='900'>Остались вопросы?</Title>
      <form
        ref={formRef}
        className={styles.form}
        onSubmit={(event) => onSubmit(event)}
      >
        {inputsInfo.map((item) => (
          <Input
            key={item.name}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            title={item.title}
            pattern={item.pattern}
            required
          />
        ))}
        <textarea className={styles.textarea} placeholder='Сообщение...'/>
        <Button type='submit'>Оставить заявку</Button>
      </form>
    </section>
  )
}

export default Feedback
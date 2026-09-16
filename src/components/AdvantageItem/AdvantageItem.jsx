import styles from './AdvantageItem.module.scss'
import Title from '@/components/Title/Title.jsx'

const AdvantageItem = (props) => {
  const {
    url,
    title,
    text,
  } = props

  return (
    <li className={styles.item}>
      <img
        src={url}
        alt=""
        width="136"
        height="136"
        loading="lazy"
      />
      <div className={styles.content}>
        <Title
          type='h3'
          weight='900'
        >
          {title}
        </Title>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  )
}

export default AdvantageItem
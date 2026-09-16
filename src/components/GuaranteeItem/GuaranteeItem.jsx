import styles from './GuaranteeItem.module.scss'
import Title from '@/components/Title/Title.jsx'

const GuaranteeItem = (props) => {
  const {
    url,
    title,
  } = props

  return (
    <li className={styles.item}>
      <img
        src={url}
        alt={title}
        width="366"
        height="28"
        loading="lazy"
      />
      <Title
        type='h3'
        weight='900'
      >
        {title}
      </Title>
    </li>
  )
}

export default GuaranteeItem
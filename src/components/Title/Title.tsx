import styles from './Title.module.scss'
import {type ReactNode} from "react";

interface TitleProps {
  children: ReactNode
  type: 'h1' | 'h2' | 'h3',
  weight: number,
}

const Title = (props: TitleProps) => {
  const {
    children,
    type,
    weight,
  } = props

  const fontWeight = weight ? styles[`w${weight}`] : ''

  switch (type) {
    case 'h1':
      return (
        <h1
          className={`${styles.titleH1} ${fontWeight}`}
        >{children}</h1>
      )

    case 'h2':
      return (
        <h2
          className={`${styles.titleH2} ${fontWeight}`}
        >{children}</h2>
      )

    case 'h3':
      return (
        <h3
          className={`${styles.titleH3} ${fontWeight}`}
        >{children}</h3>
      )
  }
}

export default Title
import styles from './Button.module.scss'
import type {ComponentProps, ReactNode} from "react";

interface ButtonProps {
  type: ComponentProps<'button'>['type'],
  children: ReactNode,
}

const Button = (props: ButtonProps) => {
  const {
    type = 'submit',
    children,
  } = props

  return (
    <button
      type={type}
      className={styles.button}
    >
      {children}
    </button>
  )
}

export default Button
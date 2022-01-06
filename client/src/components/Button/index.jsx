import { Link } from 'react-router-dom'
import './styles.css'

const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <button className={`button button--${variant}`} {...props}>
      {children}
    </button>
  )
}

const ButtonLink = ({ variant = 'primary', children, ...props }) => {
  return (
    <Link className={`button-link button-link--${variant}`} {...props}>
      {children}
    </Link>
  )
}

export { Button, ButtonLink }

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
    <button className={`button-link button-link--${variant}`} {...props}>
      {children}
    </button>
  )
}

export { Button, ButtonLink }

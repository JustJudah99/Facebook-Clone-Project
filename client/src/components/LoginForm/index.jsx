import { Link } from 'react-router-dom'
import { Button, ButtonLink } from '../Button'
import { Input, InputPassword } from '../Input'
import './styles.css'

const LoginForm = () => {
  return (
    <div className="loginform__wrapper">
      <form>
        <Input placeholder="Correo electrónico o número de teléfono" />
        <InputPassword placeholder="Contraseña" />
        <div className="loginform__container">
          <Button>Iniciar sesión</Button>
        </div>
        <div className="loginform__container--margin-top">
          <Link to="/">¿Olvidaste tu contraseña?</Link>
        </div>
        <div className="loginform__separator" />
        <div className="loginform__container--less-padding">
          <ButtonLink to="/">Crear cuenta nueva</ButtonLink>
        </div>
      </form>
    </div>
  )
}

export default LoginForm

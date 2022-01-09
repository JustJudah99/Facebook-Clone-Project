import { Link } from 'react-router-dom'
import useField from '../../hooks/useField'
import { Button, ButtonLink } from '../Button'
import { Input, InputPassword } from '../Input'
import { useMutation } from "@apollo/client"
import { LOGIN_USER } from '../../graphql/User'
import './styles.css'

const LoginForm = ({ handleSignUp }) => {
  const email = useField('email')
  const password = useField('password')
  const [loginUser] = useMutation(LOGIN_USER,{
    variables: {
      email: email.value,
      password: password.value
    }
  })
  return (
    <div className="loginform__wrapper">
      <form>
        <Input {...email} placeholder="Correo electrónico o número de teléfono" />
        <InputPassword {...password} placeholder="Contraseña" />
        <div className="loginform__container">
          <Button type="button" onClick={loginUser}>Iniciar sesión</Button>
        </div>
        <div className="loginform__container--margin-top">
          <Link to="/">¿Olvidaste tu contraseña?</Link>
        </div>
        <div className="loginform__separator" />
        <div className="loginform__container--less-padding">
          <ButtonLink type="button" onClick={handleSignUp}>
            Crear cuenta nueva
          </ButtonLink>
        </div>
      </form>
    </div>
  )
}

export default LoginForm

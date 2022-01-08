import { Link } from 'react-router-dom'
import useField from '../../hooks/useField'
import { Button, ButtonLink } from '../Button'
import { Input, InputPassword } from '../Input'
import { gql, useQuery } from "@apollo/client"
import './styles.css'

const LOGIN_USER = gql`
  query {
    userCount
  }
`

const LoginForm = ({ handleSignUp }) => {
  const email = useField('email')
  const password = useField('password')
  const handleLogin = (e)=> {
    e.preventDefault()
    console.log(email, password);
  }
  return (
    <div className="loginform__wrapper">
      <form>
        <Input {...email} placeholder="Correo electrónico o número de teléfono" />
        <InputPassword {...password} placeholder="Contraseña" />
        <div className="loginform__container">
          <Button type="submit" onClick={handleLogin}>Iniciar sesión</Button>
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

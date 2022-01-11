import { useMutation } from '@apollo/client'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import useField from '../../hooks/useField'
import { LOGIN_USER } from '../../user/graphql-queries'
import { Button, ButtonLink } from '../Button'
import { Input, InputPassword } from '../Input'
import './styles.css'

const LoginForm = ({ handleSignUp }) => {
  const { userDispatch } = useContext(UserContext)
  const navigate = useNavigate()
  const email = useField('email')
  const password = useField('password')
  const [loginUser, { data }] = useMutation(LOGIN_USER, {
    variables: {
      email: email.value,
      password: password.value
    },
    onCompleted: (data) => {
      const { token } = data.login
      if (token === 'false') {
        console.log('INVALID PASSWORD')
      } else {
        localStorage.setItem('token', token)
        userDispatch({ type: 'SET_CURRENT_USER', payload: '' })
        navigate('/')
      }
    }
  })
  return (
    <div className="loginform__wrapper">
      <form>
        <Input {...email} placeholder="Correo electrónico o número de teléfono" />
        <InputPassword {...password} placeholder="Contraseña" />
        <div className="loginform__container">
          <Button type="button" onClick={loginUser}>
            Iniciar sesión
          </Button>
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

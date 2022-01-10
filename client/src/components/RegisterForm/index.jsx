import useField from '../../hooks/useField'
import DateOfBirthField from './components/DateOfBirthField'
import GenderField from './components/GenderField'
import InputField from './components/InputField'
import PasswordField from './components/PasswordField'
import './styles.css'

const RegisterForm = ({ handleClose }) => {
  const name = useField('text')
  const lastname = useField('text')
  const email = useField('email')
  const password = useField('password')
  
  return (
    <div className="register-form__wrapper">
      <div className="register-form__container">
        <button className="register-form__btn-close" onClick={handleClose}>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
            alt="close-btn-form"
            width="24"
            height="24"
          />
        </button>
        <header className="register-form__header">
          <h3 className="register-form__title">Registrarte</h3>
          <p className="register-form__subtitle">Es rápido y fácil.</p>
        </header>
        <form className="register-form__form">
          <section className="register-form__section-fields">
            <InputField placeholder="Nombre" {...name} />
            <InputField placeholder="Apellido" {...lastname} />
          </section>
          <InputField placeholder="Número de celular o correo electrónico" {...email} />
          <PasswordField placeholder="Contraseña nueva" {...password} />
          <DateOfBirthField />
          <GenderField />
          <div className="register-form__policies-wrapper">
            <p className="register-form__policies">
              Al hacer clic en {'"Registrarte"'}, aceptas nuestras{' '}
              <a href="/legal/terms/update" target="_blank" rel="nofollow">
                Condiciones
              </a>
              , la{' '}
              <a href="/about/privacy/update" target="_blank" rel="nofollow">
                Política de datos{' '}
              </a>
              y la{' '}
              <a href="/policies/cookies/" target="_blank" rel="nofollow">
                Política de cookies
              </a>
              . Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando
              quieras.
            </p>
          </div>
          <div className="register-form__wrapper-btn">
            <button className="register-form__btn-submit" type="submit">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm

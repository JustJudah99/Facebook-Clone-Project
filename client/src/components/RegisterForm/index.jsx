import useField from '../../hooks/useField'
import InputForm from './InputForm'
import './styles.css'

const RegisterForm = () => {
  const name = useField('text')
  const lastname = useField('text')
  const email = useField('email')
  const password = useField('password')

  return (
    <div className="register-form__wrapper">
      <div className="register-form__container">
        <header className="register-form__header">
          <h3 className="register-form__title">Registrarte</h3>
          <p className="register-form__subtitle">Es rápido y fácil.</p>
        </header>
        <form className="register-form__form">
          <section className="register-form__section-fields">
            <InputForm placeholder="Nombre" {...name} />
            <InputForm placeholder="Apellido" {...lastname} />
          </section>
          <InputForm placeholder="Número de celular o correo electrónico" {...email} />
          <InputForm placeholder="Contraseña nueva" {...password} />
        </form>
      </div>
    </div>
  )
}

export default RegisterForm

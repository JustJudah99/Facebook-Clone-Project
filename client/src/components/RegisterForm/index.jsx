import { useState } from 'react'
import { regexs } from '../../constants'
import DateOfBirthField from './components/DateOfBirthField'
import GenderField from './components/GenderField'
import InputField from './components/InputField'
import PoliciesSection from './components/PoliciesSection'
import './styles.css'

const RegisterForm = ({ handleClose }) => {
  const [name, setName] = useState({ type: 'text', value: '', validated: null })
  const [lastname, setLastName] = useState({ type: 'text', value: '', validated: null })
  const [email, setEmail] = useState({ type: 'email', value: '', validated: null })
  const [password, setPassword] = useState({ type: 'password', value: '', validated: null })

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
        <form
          className="register-form__form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <section className="register-form__section-fields">
            <InputField
              state={name}
              setState={setName}
              posError="left"
              messageError="¿Cómo te llamas?"
              regex={regexs.name}
              placeholder="Nombre"
            />
            <InputField
              state={lastname}
              setState={setLastName}
              posError="bottom"
              messageError="¿Cómo te llamas?"
              regex={regexs.name}
              placeholder="Apellido"
            />
          </section>
          <InputField
            state={email}
            setState={setEmail}
            posError="left"
            messageError="Ingresa un número de teléfono celular o una dirección de correo electrónico válidos."
            regex={regexs.email}
            placeholder="Número de celular o correo electrónico"
          />
          <InputField
            state={password}
            setState={setPassword}
            posError="left"
            messageError="Ingresa una combinación de al menos seis números, letras y signos de puntuación (como ! y &)."
            regex={regexs.password}
            placeholder="Contraseña nueva"
            onClick={() => setPassword((prev) => ({ ...prev, type: 'text' }))}
            onFocus={() => setPassword((prev) => ({ ...prev, type: 'text' }))}
            onBlur={() => setPassword((prev) => ({ ...prev, type: 'password' }))}
          />
          <DateOfBirthField />
          <GenderField />
          <PoliciesSection />
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

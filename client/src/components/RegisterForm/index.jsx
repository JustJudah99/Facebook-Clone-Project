import { MIN_AGE, NOT_GENDER, NOT_PRONOUN, OTHER_GENDER, regexs } from '../../constants'
import useForm from '../../hooks/useForm'
import { getAge, getDateSystem } from '../../utils'
import DateOfBirthField from './components/DateOfBirthField'
import GenderField from './components/GenderField'
import InputField from './components/InputField'
import PoliciesSection from './components/PoliciesSection'
import './styles.css'

const initialValues = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  date: getDateSystem(), // { day: 1, month: 0, year: 2022}
  gender: { id: NOT_GENDER, custom: NOT_PRONOUN, name: '' }
}

const validateValues = (values) => {
  const errors = {}
  const { name, lastname, email, password, date, gender } = values

  if (!regexs.name.test(name)) errors.name = '¿Cómo te llamas?'

  if (!regexs.name.test(lastname)) errors.lastname = '¿Cómo te llamas?'

  if (!regexs.email.test(email))
    errors.email =
      'Ingresa un número de teléfono celular o una dirección de correo electrónico válidos.'

  if (!regexs.password.test(password))
    errors.password =
      'Ingresa una combinación de al menos seis números, letras y signos de puntuación (como ! y &).'

  if (!(getAge(date) > MIN_AGE))
    errors.date =
      'Parece que la información que ingresaste no es correcta. Asegúrate de usar tu fecha de nacimiento real.'

  if (gender.id === NOT_GENDER) {
    errors.gender = 'Elige un género. Podrás cambiar quién puede verlo más tarde.'
  } else if (gender.id === OTHER_GENDER && gender.custom === NOT_PRONOUN)
    errors.gender = 'Por favor selecciona tu pronombre'

  return errors
}

const RegisterForm = ({ handleClose }) => {
  const { values, errors, checkErrors, handleChange, handleBlur, handleFocus } = useForm(
    initialValues,
    validateValues
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    checkErrors()
    if (Object.keys(errors).length === 0) return
    console.log({ values })
  }

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
        <form className="register-form__form" onSubmit={handleSubmit}>
          <section className="register-form__section-fields">
            <InputField
              type="text"
              name="name"
              value={values.name}
              placeholder="Nombre"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              errors={errors.name}
            />
            <InputField
              type="text"
              name="lastname"
              value={values.lastname}
              placeholder="Apellido"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              errors={errors.lastname}
            />
          </section>
          <InputField
            type="email"
            name="email"
            value={values.email}
            placeholder="Número de celular o correo electrónico"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            errors={errors.email}
          />
          <InputField
            type="password"
            name="password"
            value={values.password}
            placeholder="Contraseña nueva"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            errors={errors.password}
          />
          <DateOfBirthField
            value={values.date}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            errors={errors.date}
          />
          <GenderField
            value={values.gender}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            errors={errors.gender}
          />
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

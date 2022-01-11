import { REGISTER_USER } from '../../graphql/User'
import { useMutation } from "@apollo/client"
import DateOfBirthField from './components/DateOfBirthField'
import GenderField from './components/GenderField'
import InputField from './components/InputField'
import PasswordField from './components/PasswordField'
import PoliciesSection from './components/PoliciesSection'
import { initialValues, useRegister, validateValues } from './hooks/useRegister'
import './styles.css'

const RegisterForm = ({ handleClose }) => {
  const { fields, handleSubmit } = useRegister(initialValues, validateValues);
  const [register, {data}] = useMutation(REGISTER_USER, {
    variables: {
      name: fields.name.value,
      lastname: fields.lastname.value,
      email: fields.email.value,
      password: fields.password.value,
      dayOfBirth: fields.date.value.day,
      monthOfBirth: fields.date.value.month,
      yearOfBith: fields.date.value.year,
      sexId: fields.gender.value.id,
      sexType: fields.gender.value.name
    },
    onCompleted: (data) => {
      console.log(fields);
    }
  })

  const validateForm = () => {
    const rs= validateValues({
      name: fields.name.value,
      lastname: fields.lastname.value,
      email: fields.email.value,
      password: fields.password.value,
      birth: {
        day: fields.date.value.day,
        month: fields.date.value.month,
        year: fields.date.value.year,
      },
      gender: {
        sexId: fields.gender.value.id,
        sexType: fields.gender.value.name
      }
    })
    if (rs.register) {
      register() 
    } else {
      
    }
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
            <InputField {...fields.name} />
            <InputField {...fields.lastname} />
          </section>
          <InputField {...fields.email} />
          <PasswordField {...fields.password} />
          <DateOfBirthField {...fields.date} />
          <GenderField {...fields.gender} />
          <PoliciesSection />
          <div className="register-form__wrapper-btn">
            <button className="register-form__btn-submit" type="click" onClick={validateForm}>
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm

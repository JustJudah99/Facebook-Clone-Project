import DateOfBirthField from './components/DateOfBirthField'
import GenderField from './components/GenderField'
import InputField from './components/InputField'
import PoliciesSection from './components/PoliciesSection'
import useRegister from './hooks/useRegister'
import './styles.css'

const RegisterForm = ({ handleClose }) => {
  const { fields, handleSubmit } = useRegister()
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
          <InputField {...fields.password} />
          <DateOfBirthField {...fields.date} />
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

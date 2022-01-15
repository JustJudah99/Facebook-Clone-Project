const InputField = ({ errors, ...props }) => {
  const invalidMsg = (e) => {
    e.target.setCustomValidity('¿Cual es tu nombre?')
    console.log(e);
  }
  return (
    <div className="register-form__input-wrapper">
      <div className="register-form__input-container">
        <input
          {...props}
          className={`register-form__input-element ${errors ? 'register-form__error' : ''}`}
          spellCheck="false"
          required
          onInvalid={invalidMsg}
        />
      </div>
      {errors && <span className="register-form__input-element-icon" />}
    </div>
  )
}

export default InputField

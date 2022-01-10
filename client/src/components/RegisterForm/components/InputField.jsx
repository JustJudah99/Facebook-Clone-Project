const InputField = ({ errors, ...props }) => {
  return (
    <div className="register-form__input-wrapper">
      <div className="register-form__input-container">
        <input
          {...props}
          className={`register-form__input-element ${errors ? 'register-form__error' : ''}`}
          spellCheck="false"
        />
      </div>
      {errors && <span className="register-form__input-element-icon" />}
    </div>
  )
}

export default InputField

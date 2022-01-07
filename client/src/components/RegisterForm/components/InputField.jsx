const InputField = ({ ...props }) => {
  return (
    <div className="register-form__input-wrapper">
      <div className="register-form__input-container">
        <input className="register-form__input-element" spellCheck="false" {...props} />
      </div>
    </div>
  )
}

export default InputField

const InputField = ({ state, setState, posError, messageError, regex, ...props }) => {
  const handleChange = ({ target }) => setState((prev) => ({ ...prev, value: target.value }))
  const validateField = () => {
    if (!regex) return
    const validated = regex.test(state.value)
    setState((prev) => ({ ...prev, validated }))
  }

  return (
    <div className="register-form__input-wrapper">
      <div className="register-form__input-container">
        <input
          {...props}
          type={state.type}
          value={state.value}
          className={`register-form__input-element ${
            state.validated === false ? 'register-form__error' : ''
          }`}
          spellCheck="false"
          onChange={handleChange}
          onKeyUp={validateField}
          onBlur={validateField}
        />
      </div>
      {state.validated === false && <span className="register-form__input-element-icon" />}
    </div>
  )
}

export default InputField

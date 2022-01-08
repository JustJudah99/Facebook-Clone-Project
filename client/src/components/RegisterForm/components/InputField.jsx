const InputField = ({ state, setState, posError, messageError, regex, ...props }) => {
  const validateField = () => {
    if (!regex) return state.validated
    return regex.test(state.value)
  }

  const handleChange = ({ target }) => {
    const validated = validateField()
    setState((prev) => ({ ...prev, value: target.value, validated }))
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
        />
      </div>
      {state.validated === false && <span className="register-form__input-element-icon" />}
    </div>
  )
}

export default InputField

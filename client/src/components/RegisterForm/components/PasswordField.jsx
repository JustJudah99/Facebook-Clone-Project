const PasswordField = ({ state, setState, posError, messageError, regex, ...props }) => {
  const handleChange = ({ target }) => setState((prev) => ({ ...prev, value: target.value }))
  const validateField = () => {
    if (!regex) return
    const validated = regex.test(state.value)
    setState((prev) => ({ ...prev, validated }))
  }

  const changeType = () => {
    if (state.type === 'text') setState((prev) => ({ ...prev, type: 'password' }))
    else if (state.type === 'password') setState((prev) => ({ ...prev, type: 'text' }))
  }

  const handleBlur = () => {
    validateField()
    changeType()
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
          autoComplete="new-password"
          onChange={handleChange}
          onKeyUp={validateField}
          onFocus={changeType}
          onBlur={handleBlur}
        />
      </div>
      {state.validated === false && <span className="register-form__input-element-icon" />}
    </div>
  )
}

export default PasswordField

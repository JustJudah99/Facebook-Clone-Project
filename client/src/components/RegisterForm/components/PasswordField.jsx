import { useState } from 'react'

const PasswordField = ({ errors, ...props }) => {
  const [state, setState] = useState('password')
  return (
    <div className="register-form__input-wrapper">
      <div className="register-form__input-container">
        <input
          {...props}
          type={state}
          className={`register-form__input-element ${errors ? 'register-form__error' : ''}`}
          spellCheck="false"
          onFocusCapture={() => setState('text')}
          onBlurCapture={() => setState('password')}
          autoComplete="new-password"
        />
      </div>
      {errors && <span className="register-form__input-element-icon" />}
    </div>
  )
}

export default PasswordField

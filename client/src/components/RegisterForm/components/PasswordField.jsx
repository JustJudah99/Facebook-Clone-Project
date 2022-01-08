import { useState } from 'react'

const PasswordField = ({ ...props }) => {
  const [type, setType] = useState('password')
  return (
    <div className="register-form__input-wrapper">
      <div className="register-form__input-container">
        <input
          {...props}
          type={type}
          className="register-form__input-element"
          autoComplete="new-password"
          onClick={() => setType('text')}
          onFocus={() => setType('text')}
          onBlur={() => setType('password')}
        />
      </div>
    </div>
  )
}

export default PasswordField

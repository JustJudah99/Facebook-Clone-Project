const RadioButton = ({ value, label, state, handleChange }) => {
  return (
    <span className="register-form__checkbox">
      <label htmlFor={`radio-button-${label}`}>{label}</label>
      <input
        type="radio"
        id={`radio-button-${label}`}
        value={value}
        checked={value === state}
        onChange={handleChange}
      />
    </span>
  )
}

export default RadioButton

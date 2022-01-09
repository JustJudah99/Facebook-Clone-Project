const RadioButton = ({ value, label, state, handleChange, validated = null }) => {
  return (
    <span
      className={`register-form__checkbox ${validated === false ? 'register-form__error' : ''}`}
    >
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

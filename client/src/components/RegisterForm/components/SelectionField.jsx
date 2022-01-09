const SelectionField = ({ options = [], validated = null, ...props }) => {
  return (
    <select
      className={`register-form__select ${validated === false ? 'register-form__error' : ''}`}
      {...props}
    >
      {options.map((option) => (
        <option key={option.children} {...option} />
      ))}
    </select>
  )
}

export default SelectionField

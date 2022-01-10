const SelectionField = ({ options = [], errors, ...props }) => {
  return (
    <select className={`register-form__select ${errors ? 'register-form__error' : ''}`} {...props}>
      {options.map((option) => (
        <option key={option.children} {...option} />
      ))}
    </select>
  )
}

export default SelectionField

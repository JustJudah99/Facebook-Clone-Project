const SelectionField = ({ options = [], ...props }) => {
  return (
    <select className="register-form__select" {...props}>
      {options.map((option) => (
        <option key={option.children} {...option} />
      ))}
    </select>
  )
}

export default SelectionField

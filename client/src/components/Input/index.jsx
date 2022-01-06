import './styles.css'

const Input = ({ labelValue, ...props }) => {
  return (
    <div className="input">
      {labelValue ?? <label className="input__label">{labelValue}</label>}
      <input className="input__element" spellCheck="false" {...props} />
    </div>
  )
}

export { Input }

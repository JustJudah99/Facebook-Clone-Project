import { getDays, getMonths, getYears } from '../../../utils'
import ContainerField from './ContainerField'
import SelectionField from './SelectionField'

const DateOfBirthField = ({ value, errors, onChange, onFocus, onBlur }) => {
  const normalizeTargetInput = (e) => {
    const { value: newValue, name: inputName } = e.target
    return { name: 'date', value: { ...value, [inputName]: +newValue } }
  }

  const handleChange = (e) => {
    const target = normalizeTargetInput(e)
    onChange({ target })
  }

  const handleFocus = (e) => {
    const target = normalizeTargetInput(e)
    onFocus({ target })
  }

  const handleBlur = (e) => {
    const target = normalizeTargetInput(e)
    onBlur({ target })
  }

  return (
    <ContainerField label="Fecha de nacimiento">
      <div className="register-form__wrapper-select">
        <SelectionField
          name="day"
          options={getDays()}
          value={value.day}
          errors={errors}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <SelectionField
          name="month"
          options={getMonths()}
          value={value.month}
          errors={errors}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <SelectionField
          name="year"
          options={getYears()}
          value={value.year}
          errors={errors}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </ContainerField>
  )
}

export default DateOfBirthField

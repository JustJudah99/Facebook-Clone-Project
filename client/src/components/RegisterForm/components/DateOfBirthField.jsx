import { getDays, getMonths, getYears } from '../../../utils'
import { DateOfBirth } from '../hooks/DateOfBirth'
import ContainerField from './ContainerField'
import SelectionField from './SelectionField'

const DateOfBirthField = ({ value, errors, onChange, onFocus, onBlur }) => {
  const handlers = DateOfBirth({ value, errors, onChange, onFocus, onBlur })
  return (
    <ContainerField label="Fecha de nacimiento">
      <div className="register-form__wrapper-select">
        <SelectionField
          name="day"
          options={getDays()}
          value={value.day}
          errors={errors}
          {...handlers}
        />
        <SelectionField
          name="month"
          options={getMonths()}
          value={value.month}
          errors={errors}
          {...handlers}
        />
        <SelectionField
          name="year"
          options={getYears()}
          value={value.year}
          errors={errors}
          {...handlers}
        />
      </div>
    </ContainerField>
  )
}

export default DateOfBirthField

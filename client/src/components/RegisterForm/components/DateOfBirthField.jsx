import { useDateOfBirth } from '../hooks/useDateOfBirth'
import ContainerField from './ContainerField'
import SelectionField from './SelectionField'

const DateOfBirthField = (props) => {
  const { options, values, errors, handlers } = useDateOfBirth(props)
  const { days, months, years } = options
  const { day, month, year } = values
  return (
    <ContainerField label="Fecha de nacimiento">
      <div className="register-form__wrapper-select">
        <SelectionField name="day" options={days} value={day} errors={errors} {...handlers} />
        <SelectionField name="month" options={months} value={month} errors={errors} {...handlers} />
        <SelectionField name="year" options={years} value={year} errors={errors} {...handlers} />
      </div>
    </ContainerField>
  )
}

export default DateOfBirthField

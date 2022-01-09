import { getAge, getDays, getMonths, getYears } from '../../../utils'
import ContainerField from './ContainerField'
import SelectionField from './SelectionField'

const MIN_AGE = 4

const DateOfBirthField = ({ state, setState }) => {
  const changeDay = ({ target }) =>
    setState((prev) => ({
      ...prev,
      value: { ...prev.value, day: +target.value },
      validated: getAge({ ...prev.value, day: +target.value }) > MIN_AGE
    }))
  const changeMonth = ({ target }) =>
    setState((prev) => ({
      ...prev,
      value: { ...prev.value, month: +target.value },
      validated: getAge({ ...prev.value, month: +target.value }) > MIN_AGE
    }))
  const changeYear = ({ target }) =>
    setState((prev) => ({
      ...prev,
      value: { ...prev.value, year: +target.value },
      validated: getAge({ ...prev.value, year: +target.value }) > MIN_AGE
    }))

  console.log({ age: getAge(state.value) >= MIN_AGE })

  return (
    <ContainerField label="Fecha de nacimiento">
      <div className="register-form__wrapper-select">
        <SelectionField
          options={getDays()}
          value={state.value.day}
          validated={state.validated}
          onChange={changeDay}
        />
        <SelectionField
          options={getMonths()}
          value={state.value.month}
          validated={state.validated}
          onChange={changeMonth}
        />
        <SelectionField
          options={getYears()}
          value={state.value.year}
          validated={state.validated}
          onChange={changeYear}
        />
      </div>
    </ContainerField>
  )
}

export default DateOfBirthField

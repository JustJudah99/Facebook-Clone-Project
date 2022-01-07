import { useState } from 'react'
import { getDateSystem, getDays, getMonths, getYears } from '../../../utils'
import ContainerField from './ContainerField'
import SelectionField from './SelectionField'

const DateOfBirthField = () => {
  const [state, setState] = useState(getDateSystem())

  const changeDay = ({ target }) => setState((prev) => ({ ...prev, day: target.value }))
  const changeMonth = ({ target }) => setState((prev) => ({ ...prev, month: target.value }))
  const changeYear = ({ target }) => setState((prev) => ({ ...prev, year: target.value }))

  return (
    <ContainerField label="Fecha de nacimiento">
      <div className="register-form__wrapper-select">
        <SelectionField options={getDays()} value={state.day} onChange={changeDay} />
        <SelectionField options={getMonths()} value={state.month} onChange={changeMonth} />
        <SelectionField options={getYears()} value={state.year} onChange={changeYear} />
      </div>
    </ContainerField>
  )
}

export default DateOfBirthField

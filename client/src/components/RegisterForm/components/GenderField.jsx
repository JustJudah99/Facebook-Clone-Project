import { useState } from 'react'
import { genders, pronouns } from '../../../constants'
import ContainerField from './ContainerField'
import InputField from './InputField'
import RadioButton from './RadioButton'
import SelectionField from './SelectionField'

const NOT_SELECT_GENDER = 0
const OTHER_GENDER_SELECTION = genders.find(({ label }) => label === 'Personalizado').value || 3

const GenderField = () => {
  const [state, setState] = useState({ gender: NOT_SELECT_GENDER, otherGender: 0 })

  const changeGender = ({ target }) => setState((prev) => ({ ...prev, gender: +target.value }))
  const changeOther = ({ target }) => setState((prev) => ({ ...prev, otherGender: +target.value }))

  return (
    <ContainerField label="Sexo">
      <div className="register-form__wrapper-select">
        {genders.map((gender) => (
          <RadioButton
            key={gender.label}
            state={state.gender}
            handleChange={changeGender}
            {...gender}
          />
        ))}
      </div>
      {state.gender === OTHER_GENDER_SELECTION && (
        <div className="register-form__wrapper-select--margin">
          <SelectionField options={pronouns} value={state.other} onChange={changeOther} />
          <ContainerField label="Tu pronombre será visible para todos." activeBtn={false}>
            <InputField placeholder="Género (opcional)" />
          </ContainerField>
        </div>
      )}
    </ContainerField>
  )
}

export default GenderField

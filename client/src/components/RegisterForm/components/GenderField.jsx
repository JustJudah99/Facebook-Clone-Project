import { useEffect, useState } from 'react'
import { genders, pronouns } from '../../../constants'
import ContainerField from './ContainerField'
import InputField from './InputField'
import RadioButton from './RadioButton'
import SelectionField from './SelectionField'

const NOT_SELECT_GENDER = 0
const OTHER_GENDER_SELECT = genders.find(({ label }) => label === 'Personalizado').value || 3

const GenderField = ({ state, setState }) => {
  const [opcional, setOpcional] = useState({ type: 'text', value: '', validated: null })

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      value: { ...prev.value, pronoun: { ...prev.value.pronoun, gender: opcional.value } }
    }))
  }, [opcional.value])

  const changeGender = ({ target }) =>
    setState((prev) => ({
      ...prev,
      value: { ...prev.value, gender: +target.value },
      validated: +target.value !== OTHER_GENDER_SELECT ? +target.value !== NOT_SELECT_GENDER : null
    }))

  const changeOther = ({ target }) =>
    setState((prev) => ({
      ...prev,
      value: { ...prev.value, pronoun: { ...prev.value.pronoun, value: +target.value } },
      validated: +target.value !== NOT_SELECT_GENDER
    }))

  return (
    <ContainerField label="Sexo">
      <div className="register-form__wrapper-select">
        {genders.map((gender) => (
          <RadioButton
            key={gender.label}
            state={state.value.gender}
            handleChange={changeGender}
            validated={state.value.gender !== OTHER_GENDER_SELECT ? state.validated : null}
            {...gender}
          />
        ))}
      </div>
      {state.value.gender === OTHER_GENDER_SELECT && (
        <div className="register-form__wrapper-select--margin">
          <SelectionField
            options={pronouns}
            value={state.value.pronoun.value}
            onChange={changeOther}
            validated={state.validated}
          />
          <ContainerField label="Tu pronombre será visible para todos." activeBtn={false}>
            <InputField state={opcional} setState={setOpcional} placeholder="Género (opcional)" />
          </ContainerField>
        </div>
      )}
    </ContainerField>
  )
}

export default GenderField

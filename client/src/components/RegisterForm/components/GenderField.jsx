import { genders, NOT_PRONOUN, OTHER_GENDER, pronouns } from '../../../constants'
import ContainerField from './ContainerField'
import InputField from './InputField'
import RadioButton from './RadioButton'
import SelectionField from './SelectionField'

const GenderField = ({ value, errors, onChange, onFocus, onBlur }) => {
  const normalizeTargetInput = (e) => {
    const { value: newValue, name: newName } = e.target
    let parser = {}

    if (newName === 'opcional-gender') {
      parser = { ...value, name: newValue }
    } else if (newName === 'pronoun') {
      parser = { ...value, custom: +newValue }
    } else if (newName !== genders[2].label) {
      parser = { id: +newValue, custom: NOT_PRONOUN, name: newName }
    } else parser = { id: +newValue, custom: NOT_PRONOUN, name: '' }

    return { name: 'gender', value: parser }
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
    <ContainerField label="Sexo">
      <div className="register-form__wrapper-select">
        {genders.map((gender) => (
          <RadioButton
            name={gender.label}
            key={gender.label}
            checked={gender.value === value.id}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            errors={value.id === OTHER_GENDER ? undefined : errors}
            {...gender}
          />
        ))}
      </div>
      {value.id === OTHER_GENDER && (
        <div className="register-form__wrapper-select--margin">
          <SelectionField
            name="pronoun"
            options={pronouns}
            value={value.custom}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            errors={errors}
          />
          <ContainerField label="Tu pronombre será visible para todos." activeBtn={false}>
            <InputField
              type="text"
              name="opcional-gender"
              value={value.name}
              placeholder="Género (opcional)"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </ContainerField>
        </div>
      )}
    </ContainerField>
  )
}

export default GenderField

import { OTHER_GENDER } from '../../../constants'
import { useGender } from '../hooks/useGender'
import ContainerField from './ContainerField'
import InputField from './InputField'
import RadioButton from './RadioButton'
import SelectionField from './SelectionField'

const GenderField = ({ value, errors, onChange, onFocus, onBlur }) => {
  const { handlers, genders, pronouns } = useGender({ value, errors, onChange, onFocus, onBlur })
  return (
    <ContainerField label="Sexo">
      <div className="register-form__wrapper-select">
        {genders.map((gender) => (
          <RadioButton
            name={gender.label}
            key={gender.label}
            checked={gender.value === value.id}
            errors={value.id === OTHER_GENDER ? undefined : errors}
            {...handlers}
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
            errors={errors}
            {...handlers}
          />
          <ContainerField label="Tu pronombre será visible para todos." activeBtn={false}>
            <InputField
              type="text"
              name="opcional-gender"
              value={value.name}
              placeholder="Género (opcional)"
              {...handlers}
            />
          </ContainerField>
        </div>
      )}
    </ContainerField>
  )
}

export default GenderField

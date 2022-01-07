import ContainerField from './ContainerField'

const GenderField = () => {
  return (
    <ContainerField label="Sexo">
      <div className="register-form__wrapper-select">
        <span className="register-form__checkbox">
          <label>Mujer</label>
          <input type="radio" />
        </span>
        <span className="register-form__checkbox">
          <label>Hombre</label>
          <input type="radio" />
        </span>
        <span className="register-form__checkbox">
          <label>Personalizado</label>
          <input type="radio" />
        </span>
      </div>
    </ContainerField>
  )
}

export default GenderField

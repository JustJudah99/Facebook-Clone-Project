import ContainerField from './ContainerField'

const GenderField = () => {
  return (
    <ContainerField label="Sexo">
      <div className="register-form__wrapper-select">
        <span className="register-form__checkbox">
          <label htmlFor="radio-sex-woman">Mujer</label>
          <input type="radio" name="sex" id="radio-sex-woman" />
        </span>
        <span className="register-form__checkbox">
          <label htmlFor="radio-sex-man">Hombre</label>
          <input type="radio" name="sex" id="radio-sex-man" />
        </span>
        <span className="register-form__checkbox">
          <label htmlFor="radio-sex-p">Personalizado</label>
          <input type="radio" name="sex" id="radio-sex-p" />
        </span>
      </div>
    </ContainerField>
  )
}

export default GenderField

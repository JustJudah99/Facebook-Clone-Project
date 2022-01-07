import ContainerField from './ContainerField'

const DateOfBirthField = () => {
  return (
    <ContainerField label="Fecha de nacimiento">
      <div className="register-form__wrapper-select">
        <select className="register-form__select">
          <option value="1">1</option>
          <option value="2">1</option>
          <option value="3">1</option>
          <option value="4">1</option>
          <option value="5">1</option>
          <option value="6">1</option>
        </select>
        <select className="register-form__select">
          <option value="1">ene</option>
          <option value="2">feb</option>
          <option value="3">mar</option>
          <option value="4">abr</option>
          <option value="5">may</option>
          <option value="6">jun</option>
          <option value="7">jul</option>
          <option value="8">ago</option>
          <option value="9">sep</option>
          <option value="10">oct</option>
          <option value="11">nov</option>
          <option value="12">dic</option>
        </select>
        <select className="register-form__select">
          <option value="2022">2022</option>
          <option value="2">1</option>
          <option value="3">1</option>
          <option value="4">1</option>
          <option value="5">1</option>
          <option value="6">1</option>
        </select>
      </div>
    </ContainerField>
  )
}

export default DateOfBirthField

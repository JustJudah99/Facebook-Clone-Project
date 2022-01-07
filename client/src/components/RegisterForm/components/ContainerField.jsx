const ContainerField = ({ label = '', children }) => {
  return (
    <div className="register-form__wrapper-input-label">
      <div>
        {label}
        <a
          className="register-form__btn-question"
          href="#"
          title="Haz clic para obtener más información"
          role="button"
        >
          <span />
        </a>
      </div>
      {children}
    </div>
  )
}

export default ContainerField

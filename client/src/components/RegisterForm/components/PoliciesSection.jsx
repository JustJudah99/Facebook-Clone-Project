const PoliciesSection = () => {
  return (
    <div className="register-form__policies-wrapper">
      <p className="register-form__policies">
        Al hacer clic en {'"Registrarte"'}, aceptas nuestras{' '}
        <a href="/legal/terms/update" target="_blank" rel="nofollow">
          Condiciones
        </a>
        , la{' '}
        <a href="/about/privacy/update" target="_blank" rel="nofollow">
          Política de datos{' '}
        </a>
        y la{' '}
        <a href="/policies/cookies/" target="_blank" rel="nofollow">
          Política de cookies
        </a>
        . Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.
      </p>
    </div>
  )
}

export default PoliciesSection

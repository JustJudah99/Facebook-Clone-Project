import { MIN_AGE, NOT_GENDER, NOT_PRONOUN, OTHER_GENDER, regexs } from '../../../constants'
import useForm from '../../../hooks/useForm'
import { getAge, getDateSystem } from '../../../utils'

const initialValues = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  date: getDateSystem(), // { day: 1, month: 0, year: 2022}
  gender: { id: NOT_GENDER, custom: NOT_PRONOUN, name: '' }
}

const validateValues = ({ name, lastname, email, password, date, gender }) => {
  const errors = {}

  if (!regexs.name.test(name)) {
    errors.name = '¿Cómo te llamas?'
  }

  if (!regexs.name.test(lastname)) {
    errors.lastname = '¿Cómo te llamas?'
  }

  if (!regexs.email.test(email)) {
    errors.email =
      'Ingresa un número de teléfono celular o una dirección de correo electrónico válidos.'
  }

  if (!regexs.password.test(password)) {
    errors.password =
      'Ingresa una combinación de al menos seis números, letras y signos de puntuación (como ! y &).'
  }

  if (!(getAge(date) > MIN_AGE)) {
    errors.date =
      'Parece que la información que ingresaste no es correcta. Asegúrate de usar tu fecha de nacimiento real.'
  }

  if (gender.id === NOT_GENDER) {
    errors.gender = 'Elige un género. Podrás cambiar quién puede verlo más tarde.'
  } else if (gender.id === OTHER_GENDER && gender.custom === NOT_PRONOUN)
    errors.gender = 'Por favor selecciona tu pronombre'

  return errors
}

function useRegister() {
  const {
    values,
    errors,
    checkErrors,
    handleChange: onChange,
    handleBlur: onBlur,
    handleFocus: onFocus
  } = useForm(initialValues, validateValues)

  const handleSubmit = (e) => {
    e.preventDefault()
    checkErrors()
    if (Object.keys(errors).length !== 0) return
    console.log({ values, errors })
  }

  return {
    fields: {
      name: {
        type: 'text',
        name: 'name',
        value: values.name,
        errors: errors.name,
        placeholder: 'Nombre',
        onChange,
        onFocus,
        onBlur
      },
      lastname: {
        type: 'text',
        name: 'lastname',
        value: values.lastname,
        errors: errors.lastname,
        placeholder: 'Apellido',
        onChange,
        onFocus,
        onBlur
      },
      email: {
        type: 'email',
        name: 'email',
        value: values.email,
        errors: errors.email,
        placeholder: 'Número de celular o correo electrónico',
        onChange,
        onFocus,
        onBlur
      },
      password: {
        type: 'password',
        name: 'password',
        value: values.password,
        errors: errors.password,
        placeholder: 'Contraseña nueva',
        onChange,
        onFocus,
        onBlur
      },
      date: {
        value: values.date,
        errors: errors.date,
        onChange,
        onFocus,
        onBlur
      },
      gender: {
        value: values.gender,
        errors: errors.gender,
        onChange,
        onFocus,
        onBlur
      }
    },
    handleSubmit
  }
}

export { initialValues, validateValues, useRegister }

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

const validateValues = ({
  name,
  lastname, 
  email,
  password,
  birth: {
    day,
    month,
    year
  },
  gender:{
    sexId,
    sexType
  } }) => {
  const errors = {}
  errors.register= true;
  if (!regexs.name.test(name)) {
    errors.name = '¿Cómo te llamas?'
    errors.register= false
  }

  if (!regexs.name.test(lastname)) {
    errors.lastname = '¿Cómo te llamas?'
    errors.register= false
  }

  if (!regexs.email.test(email)) {
    errors.email = 'Ingresa un número de teléfono celular o una dirección de correo electrónico válidos.'
    errors.register= false
  }

  if (!regexs.password.test(password)) {
    errors.password = 'Ingresa una combinación de al menos seis números, letras y signos de puntuación (como ! y &).'
    errors.register= false
  }

  if (!(getAge({day, month, year}) > MIN_AGE)) {
    errors.date = 'Parece que la información que ingresaste no es correcta. Asegúrate de usar tu fecha de nacimiento real.'
    errors.register= false
  }

  if (sexId === NOT_GENDER) {
    errors.gender = 'Elige un género. Podrás cambiar quién puede verlo más tarde.'
    errors.register= false
  } else if (sexId === OTHER_GENDER && sexType === NOT_PRONOUN)
    errors.gender = 'Por favor selecciona tu pronombre'
    errors.register= false

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
    const allErrors = checkErrors()
    if (Object.keys(allErrors).length !== 0) return // NO SUBMIT

    // HERE CODE FOR SUBMIT
    console.log({ values })
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

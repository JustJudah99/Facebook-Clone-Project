import { useState } from 'react'
import { regexs } from '../../../constants'
import { getDateSystem } from '../../../utils'

export default function useRegister() {
  const [name, setName] = useState({ type: 'text', value: '', validated: null })
  const [lastname, setLastName] = useState({ type: 'text', value: '', validated: null })
  const [email, setEmail] = useState({ type: 'email', value: '', validated: null })
  const [password, setPassword] = useState({ type: 'password', value: '', validated: null })
  const [date, setDate] = useState({ value: getDateSystem(), validated: null })
  const [gender, setGender] = useState({
    value: { gender: 0, pronoun: { value: 0, gender: '' } },
    validated: null
  })

  const fields = {
    name: {
      state: name,
      setState: setName,
      posError: 'left',
      messageError: '¿Cómo te llamas?',
      regex: regexs.name,
      placeholder: 'Nombre'
    },
    lastname: {
      state: lastname,
      setState: setLastName,
      posError: 'bottom',
      messageError: '¿Cómo te llamas?',
      regex: regexs.name,
      placeholder: 'Apellido'
    },
    email: {
      state: email,
      setState: setEmail,
      posError: 'left',
      messageError:
        'Ingresa un número de teléfono celular o una dirección de correo electrónico válidos.',
      regex: regexs.email,
      placeholder: 'Número de celular o correo electrónico'
    },
    password: {
      state: password,
      setState: setPassword,
      posError: 'left',
      messageError:
        'Ingresa una combinación de al menos seis números, letras y signos de puntuación (como ! y &).',
      regex: regexs.password,
      placeholder: 'Contraseña nueva',
      onClick: () => setPassword((prev) => ({ ...prev, type: 'text' })),
      onFocus: () => setPassword((prev) => ({ ...prev, type: 'text' })),
      onBlur: () => setPassword((prev) => ({ ...prev, type: 'password' }))
    },
    date: {
      state: date,
      setState: setDate,
      pos: 'left',
      messageError:
        'Parece que la información que ingresaste no es correcta. Asegúrate de usar tu fecha de nacimiento real.'
    },
    gender: {
      state: gender,
      setState: setGender,
      pos: 'left',
      messageError: [
        'Elige un género. Podrás cambiar quién puede verlo más tarde.',
        'Por favor selecciona tu pronombre'
      ]
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const arrayFields = Object.values(fields)
    const isValidated = arrayFields.every(({ state }) => state.validated === true)

    if (isValidated) {
      const user = {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
        date: date.value,
        gender: gender.value
      }
      console.log({ user })
    } else {
      arrayFields.forEach(({ state, setState }) => {
        if (state.validated === null) setState((prev) => ({ ...prev, validated: false }))
      })
    }
  }

  return {
    fields,
    handleSubmit
  }
}

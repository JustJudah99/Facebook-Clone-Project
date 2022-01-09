import { useState } from 'react'
import { regexs } from '../../../constants'
import { getDateSystem } from '../../../utils'

export default function useRegister() {
  const [name, setName] = useState({ type: 'text', value: '', validated: null })
  const [lastname, setLastName] = useState({ type: 'text', value: '', validated: null })
  const [email, setEmail] = useState({ type: 'email', value: '', validated: null })
  const [password, setPassword] = useState({ type: 'password', value: '', validated: null })
  const [date, setDate] = useState({ type: 'date', value: getDateSystem(), validated: null })

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
      messageError: 'lol pone la fecha loco'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const arrayFields = Object.values(fields)
    const isValidated = arrayFields.every(({ state }) => state.validated === true)

    if (isValidated) {
      return console.log('Register')
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

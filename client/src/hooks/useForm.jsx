import { useState } from 'react'

export default function useForm(initialValues, validateValues) {
  const [values, setValues] = useState(initialValues)
  const [touched, setTouched] = useState([])
  const [errors, setErrors] = useState({})
  const [state, setState] = useState({ loading: false, response: null })

  const checkTouchedFields = (errors) => {
    const newErrors = { ...errors }
    Object.keys(newErrors).forEach((input) => {
      if (!touched.includes(input)) delete newErrors[input]
    })
    return newErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setTouched((prev) => [...prev, name])
  }

  const handleBlur = (event) => {
    handleChange(event)
    setErrors(validateValues(values))
  }

  const handleFocus = (event) => {
    const { name } = event.target
    setErrors((prev) => {
      const newErrors = { ...prev }
      Object.keys(newErrors).forEach((input) => {
        if (input === name) delete newErrors[input]
      })
      return newErrors
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateValues(values))

    if (Object.keys(errors).length !== 0) return
    setState({ loading: false, response: null })
  }

  return {
    values,
    errors: checkTouchedFields(errors),
    isLoading: state.loading,
    response: state.response,
    handleChange,
    handleBlur,
    handleFocus,
    handleSubmit
  }
}

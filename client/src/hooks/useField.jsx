import { useState } from 'react'

export default function useField(type, initValue = '') {
  const [value, setValue] = useState(initValue)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return { type, value, onChange }
}

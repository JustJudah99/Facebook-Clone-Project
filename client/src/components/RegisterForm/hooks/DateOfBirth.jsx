function DateOfBirth({ value, errors, onChange, onFocus, onBlur }) {
  const normalizeTargetInput = (e) => {
    const { value: newValue, name: inputName } = e.target
    return { name: 'date', value: { ...value, [inputName]: +newValue } }
  }

  const handleChange = (e) => {
    const target = normalizeTargetInput(e)
    onChange({ target })
  }

  const handleFocus = (e) => {
    const target = normalizeTargetInput(e)
    onFocus({ target })
  }

  const handleBlur = (e) => {
    const target = normalizeTargetInput(e)
    onBlur({ target })
  }

  return {
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  }
}

export { DateOfBirth }

import { getDays, getMonths, getYears } from '../../../utils'

function useDateOfBirth({ value, errors, onChange, onFocus, onBlur }) {
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
    values: {
      day: value.day,
      month: value.month,
      year: value.year
    },
    options: {
      days: getDays(),
      months: getMonths(),
      years: getYears()
    },
    errors,
    handlers: {
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur
    }
  }
}

export { useDateOfBirth }

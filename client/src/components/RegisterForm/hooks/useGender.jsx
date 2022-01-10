import { genders, NOT_PRONOUN, pronouns } from '../../../constants'

function useGender({ value, errors, onChange, onFocus, onBlur }) {
  const normalizeTargetInput = (e) => {
    const { value: newValue, name: newName } = e.target
    let parser = {}

    if (newName === 'opcional-gender') {
      parser = { ...value, name: newValue }
    } else if (newName === 'pronoun') {
      parser = { ...value, custom: +newValue }
    } else if (newName !== genders[2].label) {
      parser = { id: +newValue, custom: NOT_PRONOUN, name: newName }
    } else parser = { id: +newValue, custom: NOT_PRONOUN, name: '' }

    return { name: 'gender', value: parser }
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
    handlers: { onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur },
    pronouns,
    genders
  }
}

export { useGender }

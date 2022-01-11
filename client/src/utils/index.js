export const getDateSystem = () => {
  const date = new Date()
  return { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() }
}

export const getDays = () => {
  return new Array(31).fill(null).map((_v, i) => {
    const value = `${i + 1}`
    return { value, children: value }
  })
}

export const getYears = (min = 1905) => {
  const lastYear = getDateSystem().year
  const numberOfYear = lastYear - min + 1
  return new Array(numberOfYear)
    .fill(null)
    .map((_v, i) => {
      const value = min + i
      return { value, children: value }
    })
    .reverse()
}

export const getMonths = () => {
  const months = [
    'ene',
    'feb',
    'mar',
    'abr',
    'may',
    'jun',
    'jul',
    'ago',
    'sep',
    'oct',
    'nov',
    'dic'
  ]
  return months.map((children, i) => ({ value: i, children }))
}

export const getAge = ({day, month, year}) => {
  const { day: sysDay, month: sysMonth, year: sysYear } = getDateSystem()

  let age = sysYear - year
  const newMonth = sysMonth - month

  if (newMonth < 0 || (newMonth === 0 && sysDay < day)) age--
  return age
}

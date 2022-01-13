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

export const getAge = ({ day, month, year }) => {
  const { day: sysDay, month: sysMonth, year: sysYear } = getDateSystem()

  let age = sysYear - year
  const newMonth = sysMonth - month

  if (newMonth < 0 || (newMonth === 0 && sysDay < day)) age--
  return age
}

export const normalizeValuesRegisterUser = (values) => ({
  name: values.name,
  lastname: values.lastname,
  email: values.email,
  password: values.password,
  dayOfBirth: values.date.day,
  monthOfBirth: values.date.month,
  yearOfBith: values.date.year,
  sexId: values.gender.id,
  sexType: values.gender.name
})

export const setUserData = (data) => {
  const { token } = data
  const user = {
    token,
    name: 'Pablo',
    lastname: 'Fuentes'
  }
  window.localStorage.setItem('loggedFbUser', JSON.stringify(user))
  return user
}

export const getUserData = () => {
  // Check userdata from localStorage
  const user = window.localStorage.getItem('loggedFbUser')
  if (typeof user === 'undefined') return null

  // Check userdata is exists
  const data = JSON.parse(user)
  if (typeof data === 'undefined' || data === null) return null

  // Formatter userdata and return object
  return {
    token: data.token,
    name: data.name,
    lastname: data.lastname
  }
}

export const removeUserData = () => {
  window.localStorage.removeItem('loggedFbUser')
}

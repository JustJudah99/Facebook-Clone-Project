import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { removeUserData, setUserData } from '../utils'

const useUser = () => {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogin = useCallback((data) => {
    // Check is valited user
    const { token } = data
    if (token === 'false') return console.log('Invalid Credentials')

    // Login Success
    const user = setUserData(data) // Save into localstorage
    setUser(() => user)
    navigate('/')
  }, [])

  const handelLogout = useCallback(() => {
    removeUserData() // remove localstorage
    setUser(() => null) // set state user as null
    navigate('/')
  }, [])

  return {
    isLogged: user !== null,
    handleLogin,
    handelLogout
  }
}

export { useUser }

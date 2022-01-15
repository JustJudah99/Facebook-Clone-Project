<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
>>>>>>> Stashed changes
import Navbar from '../../components/Navbar'
import { useUser } from '../../hooks/useUser'

const UserHome = () => {
<<<<<<< Updated upstream
  const { handelLogout } = useUser()
  return (
    <div>
      <Navbar />
      <button type="click" onClick={handelLogout}>
=======
  const { userDispatch } = useContext(UserContext)
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    userDispatch({ type: 'LOGOUT_USER', payload: '' })
    navigate('/')
  }
  return (
    <div>
      <Navbar />
      <button type="click" onClick={logout}>
>>>>>>> Stashed changes
        Cerrar Sesion
      </button>
    </div>
  )
}

export default UserHome

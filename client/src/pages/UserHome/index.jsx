import React from 'react'
import Navbar from '../../components/Navbar'
import { useUser } from '../../hooks/useUser'

const UserHome = () => {
  const { handelLogout } = useUser()
  return (
    <div>
      <Navbar />
      <button type="click" onClick={handelLogout}>
        Cerrar Sesion
      </button>
    </div>
  )
}

export default UserHome

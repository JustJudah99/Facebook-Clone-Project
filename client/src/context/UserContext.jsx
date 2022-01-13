import React, { useState } from 'react'
import { getUserData } from '../utils'

const UserContext = React.createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(getUserData())

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext

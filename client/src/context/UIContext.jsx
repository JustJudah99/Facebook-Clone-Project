import React, { useState } from 'react'

const UIContext = React.createContext({})

export function UIContextProvider({ children }) {
  const [theme, setTheme] = useState(window.sessionStorage.getItem('fbTheme') ?? 'LIGHT_MODE')

  return (
    <UIContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export default UIContext

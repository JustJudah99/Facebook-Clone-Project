import React, { createContext, useReducer} from 'react'
import { initialUIState, UIReducer } from './context/UIContext'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components/Routes/PrivateRoute'
import UserHome from './pages/UserHome'

export const UIContext = createContext()

function App() {
  const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState)
  return (
    <UIContext.Provider value={{ uiState, uiDispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<UserHome />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </UIContext.Provider>
  )
}

export default App

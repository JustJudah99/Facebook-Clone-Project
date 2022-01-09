import { createContext, useReducer } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import { initialUserState, UserReducer } from "./context/UserContext";
import UserHome from "./pages/UserHome";

export const UserContext = createContext();

function App() {
  const [userState, userDispatch] = useReducer(UserReducer, initialUserState)
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={userState.isLoggedIn || localStorage.getItem("token") !== null ? <UserHome /> : <Home /> } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App

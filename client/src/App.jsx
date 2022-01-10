import { createContext, useReducer } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserHome from "./pages/UserHome";

import { initialUIState, UIReducer } from './context/UIContext'
import { initialUserState, UserReducer } from "./context/UserContext";

export const UIContext = createContext();
export const UserContext = createContext();

function App() {
  const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState)
  const [userState, userDispatch] = useReducer(UserReducer, initialUserState)
  return (
    <UIContext.Provider value={{ uiState, uiDispatch }}>
      <UserContext.Provider value={{ userState, userDispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={userState.isLoggedIn || localStorage.getItem("token") !== null ? <UserHome /> : <Home /> } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </UIContext.Provider>
  )
}

export default App

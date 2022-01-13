import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { UIContextProvider } from './context/UIContext'
import { UserContextProvider } from './context/UserContext'
import Home from './pages/Home'

function App() {
  return (
    <UserContextProvider>
      <UIContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </UIContextProvider>
    </UserContextProvider>
  )
}

export default App

import { Outlet } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import Home from '../../pages/Home'

const PrivateRoute = () => {
  const { isLogged } = useUser()
  return isLogged ? <Outlet /> : <Home />
}

export { PrivateRoute }

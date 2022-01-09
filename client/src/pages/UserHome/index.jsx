import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'

const UserHome = () => {
    const { userDispatch } = useContext(UserContext)
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem("token")
        userDispatch({ type: 'LOGOUT_USER', payload: "" })
        navigate('/')
    }
    return (
        <div>
            <button type='click' onClick={logout}>Cerrar Sesion</button>
        </div>
    )
}

export default UserHome

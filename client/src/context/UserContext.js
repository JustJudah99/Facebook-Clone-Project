export const initialUserState = {
    isLoggedIn: false,
}
  
export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isLoggedIn: true,
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                isLoggedIn: false,
            }
        default:
            throw new Error(`action type ${action.type} is undefined`)
    }
}
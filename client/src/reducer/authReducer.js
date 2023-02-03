import{
    LoginAPI,
    RegisterAPI
} from '../types/authTypes'

const InitialState ={
    token: localStorage.getItem('token'),
    isAuthenticated : null,
    isLoading: false,
    user: null,
    msg: ""
}


export const authReducer = (state = InitialState,action)=>{
    const { type, payload } = action

    switch (type) {
        case LoginAPI:
            localStorage.setItem('token',JSON.stringify(payload))
            return{
                ...state,
                isLoading: false,
                isAuthenticated:true,
                msg: "Login Success"
            }
        case RegisterAPI:
            localStorage.setItem('token',JSON.stringify(payload))
            return{
                ...state,
                isLoading: false,
                isAuthenticated:true,
                msg: "Register Success"
            }
    
        default:
            return state;
    }
}
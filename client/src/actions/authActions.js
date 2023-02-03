import{
    LoginAPI,
    RegisterAPI

} from '../types/authTypes'

import axios from "axios";


export const loadUser = ()=> async (dispatch)=>{
    dispatch({type: USER_LOADING });
    const config ={
        Headers:{
            'Content-Type' : 'application/json'
        }
    }

    await axios.get(`${process.env.REACT_APP_API_URL}api/user/`,config).then((res)=>{
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    })
}



export const register = (data) => async (dispatch)=>{
    console.log("data "+data.email)
    const config ={
        Headers:{
            'Content-Type' : 'application/json'
        }
    }

    await axios.post(`${process.env.REACT_APP_API_URL}api/user/`,data,config).then(async(res)=>{
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
    }).catch(err=>{
        dispatch({
            type: REGISTER_FAIL,
            msg: err.response.data
        })
    })
}


export const login = (email, password)=>async (dispatch)=>{
    const config ={
        Headers:{
            'Content-Type' : 'application/json'
        }
    }

    await axios.get(`${process.env.REACT_APP_API_URL}api/login/${email}/`,config).then((res)=>{
        if(res.data.length === 0){
            alert("email not registered");
            dispatch({
                type: LOGIN_FAIL,
                msg: "email not registered"
            })
        }else{
            let emailinDB = res.data[0]?.email;
            let passwordinDB = res.data[0]?.password;

            if(emailinDB === email && passwordinDB === password){
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data[0]
                })
            }else{
                alert("wrong password");
                dispatch({
                    type: LOGIN_FAIL,
                    msg: "wrong password"
                })
            }
        }

    }).catch(err=>{
        dispatch({
            type: LOGIN_FAIL,
            msg: err.response.data
        })
    })

}


export const logout = ()=> async (dispatch)=>{
    dispatch({
        type: LOGOUT_SUCCESS,
    })
}
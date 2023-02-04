import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { auth } from "../pages/Firebase";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error ("No llego la autenticación")
    return context
}

export function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const signup = (email,password) =>
        createUserWithEmailAndPassword(auth,email,password)

        const login = async (username, password) =>{
            try {
              axios.post(`http://127.0.0.1:8000/api/login/`, {username , password})
              .then(res => {
                console.log(res);
                console.log("data "+username +"daaa" +password);
                return true
              })
            }catch(error){
                console.log("error");
          
            }  
          };

    const logout = () => signOut(auth);

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            
        });
        return () =>unsuscribe();
    },[] )

    return (
         <authContext.Provider value ={{signup, login, user, logout, loginWithGoogle}}>
             {children}
        </authContext.Provider>
    )    
}
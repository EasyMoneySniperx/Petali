import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { auth } from "../pages/Firebase";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error ("No llego la autenticación")
    return context
}

export function AuthProvider({children}) {

    const [user, setUser] = useState(null);

    const signup = (email,password) =>
        createUserWithEmailAndPassword(auth,email,password)

    const login = (email,password) =>
    signInWithEmailAndPassword(auth,email,password)

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
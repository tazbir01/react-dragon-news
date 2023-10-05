import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])

    const creatUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            console.log('user in the useState changed', user)
            setUser(user)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        signOut(auth)
    }



    const authInfo = {user,creatUser, loginUser, logout}

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
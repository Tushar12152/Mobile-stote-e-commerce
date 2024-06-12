import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase.config";

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
   const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
         setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
       return signOut(auth)
    }

    

    useEffect(()=>{
          const unsubscribe=onAuthStateChanged(auth,(user)=>{
                setUser(user)
                setLoading(false)
          })

          return ()=>{
             return unsubscribe()
          }

    },[])





    const authinfo={
        createUser,
        login,
        user,
        loading,
        logout,



    }

  return (
     <AuthContext.Provider value={authinfo}>
         {children}
     </AuthContext.Provider>
  )
}




AuthProvider.propTypes={
    children:PropTypes.any
}



export default AuthProvider
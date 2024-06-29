import React, { useState } from 'react'
import { AuthContext } from './auth-context'

const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token, setTokens] = useState(initialToken)
    const userIsLogedIn = !!token

    const LogInHandler =(token)=>{
        setTokens(token)
        localStorage.setItem('token', JSON.stringify(token))
    }
    console.log('---', userIsLogedIn)

    const LogOutHandler =()=>{
        setTokens(null)
        localStorage.removeItem('token')
    }


    const authCtxValue ={
        token: token,
        isLoggedIn: userIsLogedIn,
        LogIn: LogInHandler,
        LogOut: LogOutHandler
    }
  return (
    <AuthContext.Provider value={authCtxValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

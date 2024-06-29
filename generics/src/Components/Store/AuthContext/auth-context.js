import React from "react";

export const AuthContext = React.createContext(
    {
        token:'',
        isLoggedIn: false,
        LogIn:(token)=>{},
        LogOut: (token)=>{}
    }
)
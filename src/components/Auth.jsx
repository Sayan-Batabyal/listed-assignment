import React from 'react'
import { Navigate } from 'react-router-dom'

const Auth = ({children}) => {
  
    const token=localStorage.getItem('userToken')
    if(token){
        return children
    }
    else{
        
        return <Navigate to={'/login'} replace="true" ></Navigate>
    }
}

export default Auth
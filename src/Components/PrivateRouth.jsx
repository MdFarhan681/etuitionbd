import React, { use } from 'react'

import { Navigate, useLocation } from 'react-router'
import { AuthContext } from './Provider/AuthProvider'


const PrivateRouth = ({children}) => {
    const{user,loading}=use(AuthContext)
    const location= useLocation()


    if(loading){
       return <span className="loading loading-spinner text-error"></span>

    }
    if(user && user?.email){
 return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
 
}

export default PrivateRouth

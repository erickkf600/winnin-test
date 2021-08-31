import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isLogged } from '../services/providers/Token.providers'

const AuthGuard: any = (props: any) => {
    // const hasToken: boolean = !!localStorage.getItem('token')
    const { hasToken } = isLogged()

    return hasToken ? <Route {...props} /> : <Redirect to="/login" />
}

export default AuthGuard

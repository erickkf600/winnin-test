import React from 'react'
import { Routes } from '../interfaces/routes.interface'
import AuthGuard from './auth.guard'

const RouteSwitching = (routes: Routes[]) => {
    return routes.map((r, i) => {
        return <AuthGuard path={r.route} component={r.component} key={i} />
    })
}

export default RouteSwitching

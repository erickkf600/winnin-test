import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from '../interfaces/routes.interface'

const RouteSwitching = (routes: Routes[]) => {
    return routes.map((r, i) => {
        return <Route path={r.route} component={r.component} key={i} />
    })
}

export default RouteSwitching

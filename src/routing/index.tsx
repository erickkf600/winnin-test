import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import Header from '../components/Header'
import { isLogged } from '../services/providers/Token.providers'
import { Login } from './lazy-imports'
import { Pages } from './pages'
import RouteSwitching from './routes-switching'

const Routing = () => {
    // const hasToken = !!localStorage.getItem('token')
    const { hasToken } = isLogged()
    return (
        <BrowserRouter>
            {hasToken && <Header />}
            <div className="content">
                <Switch>
                    {RouteSwitching(Pages)}
                    {!hasToken && <Route path="/login" component={Login} />}
                    <Redirect from="/" to="/home" />
                    <Redirect from="*" to="/home" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default Routing

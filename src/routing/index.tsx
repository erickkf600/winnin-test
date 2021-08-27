import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import { Pages } from './pages'
import RouteSwitching from './routes-switching'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="content">
                <Switch>
                    {RouteSwitching(Pages)}
                    <Redirect from="/" to="/home" />
                    <Redirect from="*" to="/home" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default Routing

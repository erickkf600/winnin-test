import React from 'react'
import HeaderView from './header.view'
import './header.scss'

const Header = () => {
    const logout = () => {
        localStorage.removeItem('token')
        location.reload()
    }
    return <HeaderView logout={() => logout()} />
}

export default Header

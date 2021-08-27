import React from 'react'
import Template from './Template'
import './header.scss'
import { useDarkMode } from '../../services/providers/Theme.provider'

const Header = () => {
    const { darkMode }: any = useDarkMode()
    return <Template darkMode={darkMode} />
}

export default Header

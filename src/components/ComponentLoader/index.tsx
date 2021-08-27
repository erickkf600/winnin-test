import React, { createRef, useContext } from 'react'
import { ThemeContext } from '../../services/providers/Theme.provider'
import Template from './Template'
import './componet-loader.scss'

const ComponentLoader = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    const toggle = createRef()
    return (
        <Template
            toggle={toggle}
            darkMode={darkMode}
            setDarkMode={(e: any) => setDarkMode(e)}
        />
    )
}

export default ComponentLoader

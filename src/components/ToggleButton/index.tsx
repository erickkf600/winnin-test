import React from 'react'
import { useDarkMode } from '../../services/providers/Theme.provider'
import './toggle-button.scss'
import ToggleButtonView from './toggle-button.view'

const ToggleButton = () => {
    const { darkMode, setDarkMode } = useDarkMode()

    return (
        <ToggleButtonView
            darkMode={darkMode}
            setDarkMode={() => setDarkMode(!darkMode)}
        />
    )
}

export default ToggleButton

import React from 'react'
import { useDarkMode } from '../../services/providers/Theme.provider'
import './component-loader.scss'
import ComponentLoaderView from './componet-loader.view'

const ComponentLoader = () => {
    const { darkMode }: any = useDarkMode()
    return <ComponentLoaderView darkMode={darkMode} />
}

export default ComponentLoader

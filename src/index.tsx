import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import Routing from './routing'
import { ThemeProvider } from './services/providers/Theme.provider'

ReactDOM.render(
    <ThemeProvider>
        <Routing />
    </ThemeProvider>,
    document.getElementById('root'),
)

reportWebVitals()

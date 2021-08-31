import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import Routing from './routing'
import { ThemeProvider } from './services/providers/Theme.provider'
import TokenProvider from './services/providers/Token.providers'

ReactDOM.render(
    <ThemeProvider>
        <TokenProvider>
            <Routing />
        </TokenProvider>
    </ThemeProvider>,
    document.getElementById('root'),
)

reportWebVitals()

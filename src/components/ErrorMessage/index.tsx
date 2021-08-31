import React from 'react'
import { useDarkMode } from '../../services/providers/Theme.provider'
import './error-message.scss'
import ErrorMessageView from './error-message.view'

export type Types = 'empty' | 'http'
const ErrorMessage = ({ type }: { type: Types }) => {
    const { darkMode }: any = useDarkMode()
    return <ErrorMessageView darkMode={darkMode} type={type} />
}

export default ErrorMessage

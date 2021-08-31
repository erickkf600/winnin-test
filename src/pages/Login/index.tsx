import React from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import * as request from '../../services/http/app.post'
import { isLogged } from '../../services/providers/Token.providers'
import './login.scss'
import LoginView from './login.view'

export interface IFormInputs {
    email: string
    password: number
}

export const schema = yup.object().shape({
    email: yup
        .string()
        .email('Email inválido')
        .required('Este campo é obrigatório'),
    password: yup.string().required('Este campo é obrigatório'),
})

const Login = () => {
    const { setToken } = isLogged()
    const history = useHistory()

    //MAKE LOGIN
    const sendForm = async (data: IFormInputs) => {
        await request
            .postLogin('login', data)
            .then((res: { token: string }) => {
                localStorage.setItem('token', res.token)
                setToken(true)
                history.push('/home')
            })
            .catch(err => {
                console.log('CATCH ERROR', err)
            })
    }

    return <LoginView sendForm={(data: IFormInputs) => sendForm(data)} />
}

export default Login

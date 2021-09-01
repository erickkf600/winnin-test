/* eslint-disable no-unused-vars */
import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import Login from '.'
import * as request from '../../services/http/app.post'

describe('Login', () => {
    let spy: any

    beforeAll(() => {
        spy = jest.fn()
        spy = jest.spyOn(request, 'postLogin')
    })
    beforeEach(() => {
        render(<Login />)
    })

    afterEach(() => {
        spy.mockRestore()
    })

    it('should render title', () => {
        expect(
            screen.getByRole('heading', { name: 'Login' }),
        ).toBeInTheDocument()
    })

    it('should set invalid email', async () => {
        const email = screen.getByTestId('email') as HTMLInputElement
        const password = screen.getByTestId('password') as HTMLInputElement
        const submit = screen.getByTestId('send')
        await act(async () => {
            fireEvent.input(email, { target: { value: 'test' } })
            fireEvent.input(password, { target: { value: 'password' } })
        })
        await act(async () => {
            fireEvent.click(submit)
        })

        expect(email.value).toBe('test')
        expect(password.value).toBe('password')
    })
    it('should set valid email', async () => {
        const email = screen.getByTestId('email') as HTMLInputElement
        const password = screen.getByTestId('password') as HTMLInputElement
        const submit = screen.getByTestId('send')
        await act(async () => {
            fireEvent.input(email, { target: { value: 'eve.holt@reqres.in' } })
            fireEvent.input(password, { target: { value: 'cityslicka' } })
        })
        await act(async () => {
            fireEvent.click(submit)
        })

        expect(email.value).toBe('eve.holt@reqres.in')
        expect(password.value).toBe('cityslicka')
    })

    it('should make post request with error', async () => {
        const req = {
            email: 'eve.holdddt@reqres.in',
            password: 'citddddyslicka',
        }

        await act(async () => {
            return request
                .postLogin('login', req)
                .then(_ => {})
                .catch((error: any) => {
                    expect(error.error).toEqual(undefined)
                })
        })
    })

    it('should make post request', async () => {
        const req = { email: 'eve.holt@reqres.in', password: 'cityslicka' }

        await act(async () => {
            return request
                .postLogin('login', req)
                .then((res: { token: string }) => {
                    expect(res.token).toEqual('QpwL5tke4Pnpja7X4')
                    expect(localStorage.getItem('token')).toEqual(
                        'QpwL5tke4Pnpja7X4',
                    )
                })
        })
    })
})

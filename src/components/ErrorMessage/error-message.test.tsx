import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorMessage from '.'
import ErrorMessageView from './error-message.view'

describe('ErrorMensageComponent', () => {
    it('should create with type http', () => {
        expect(render(<ErrorMessage type="http" />)).toBeTruthy()
    })
    it('should create with type empty', () => {
        expect(render(<ErrorMessage type="empty" />)).toBeTruthy()
    })

    it('should have class error-section', () => {
        render(<ErrorMessageView darkMode={false} type="empty" />)

        const element = screen.getByTestId('error-section')
        expect(element).toHaveClass('error-message')
    })

    it('should have class error-section dark', () => {
        render(<ErrorMessageView darkMode={true} type="empty" />)

        const element = screen.getByTestId('error-section')
        expect(element).toHaveClass('dark-bg error-message')
    })

    it('should have class error-message', () => {
        render(<ErrorMessageView darkMode={false} type="empty" />)

        const element = screen.getByTestId('error-img')
        expect(element).toHaveClass('error-message__image')
    })

    it('should have class error-message', () => {
        render(<ErrorMessageView darkMode={false} type="empty" />)

        const element = screen.getByTestId('error-msg')
        expect(element).toHaveClass('error-message__texts')
    })
})

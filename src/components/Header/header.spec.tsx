import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Header from '.'
import HeaderView from './header.view'
describe('Header Componet', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            writable: true,
            value: { reload: jest.fn() },
        })
    })
    afterAll(() => {
        jest.restoreAllMocks()
    })

    it('should create', () => {
        expect(render(<Header />)).toBeTruthy()
    })
    it('should make logout', () => {
        expect(render(<Header />)).toBeTruthy()
        const button = screen.getByTestId('logout')
        fireEvent.click(button)
        expect(render(<HeaderView logout={jest.fn()} />)).toBeTruthy()
    })
    it('should have class header', () => {
        render(<Header />)
        const element = screen.getByTestId('header')
        expect(element).toHaveClass('header')
    })
    it('should have class header__title', () => {
        render(<Header />)
        const element = screen.getByTestId('title')
        expect(element).toHaveClass('header__content-title')
    })
})

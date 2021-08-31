import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import ToggleButton from '.'
import ToggleButtonView from './toggle-button.view'

describe('ToggleButton', () => {
    it('should create', () => {
        expect(render(<ToggleButton />)).toBeTruthy()
    })
    it('should toggle darkMode', () => {
        const handleClickMock = jest.fn()
        render(
            <ToggleButtonView darkMode={false} setDarkMode={handleClickMock} />,
        )
        fireEvent.click(screen.getAllByTestId('toggle')[0])
    })
    it('should make logout', async () => {
        expect(render(<ToggleButton />)).toBeTruthy()
        const button = screen.getByTestId('toggle')
        await act(async () => {
            fireEvent.click(button)
            expect(
                render(
                    <ToggleButtonView
                        darkMode={false}
                        setDarkMode={jest.fn()}
                    />,
                ),
            ).toBeTruthy()
        })
    })
    it('should have class toggle-button', () => {
        render(<ToggleButtonView darkMode={false} setDarkMode={jest.fn()} />)
        const element = screen.getByTestId('toggle-button')
        expect(element).toHaveClass('toggle-button')
    })

    it('should have class toggle-button dark', () => {
        render(<ToggleButtonView darkMode={true} setDarkMode={jest.fn()} />)
        const element = screen.getByTestId('toggle-button')
        expect(element).toHaveClass('dark-bg-medium toggle-button')
    })
})

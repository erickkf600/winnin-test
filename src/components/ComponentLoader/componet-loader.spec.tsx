import React from 'react'
import { render, screen } from '@testing-library/react'
import ComponentLoader from '.'
import ComponentLoaderView from './componet-loader.view'

describe('ComponentLoader', () => {
    it('should create', () => {
        expect(render(<ComponentLoader />)).toBeTruthy()
    })
    it('should have class loader', () => {
        render(<ComponentLoaderView darkMode={false} />)

        const element = screen.getByTestId('loading')
        expect(element).toHaveClass('loader')
    })

    it('should have class loader dark', () => {
        render(<ComponentLoaderView darkMode={true} />)

        const element = screen.getByTestId('loading')
        expect(element).toHaveClass('dark-bg loader')
    })

    it('should have spinner', () => {
        render(<ComponentLoaderView darkMode={false} />)

        const element = screen.getByTestId('spinner')
        expect(element).toHaveClass('loader__animation')
    })
})

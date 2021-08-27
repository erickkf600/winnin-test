import React from 'react'
import { render } from '@testing-library/react'
import Home from '.'

it('should create', () => {
    expect(render(<Home />)).toBeTruthy()
})

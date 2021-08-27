import React from 'react'
import { render } from '@testing-library/react'
import Header from '.'

it('should create', () => {
    expect(render(<Header />)).toBeTruthy()
})

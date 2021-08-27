import React from 'react'
import { render } from '@testing-library/react'
import ToggleButton from '.'

it('should create', () => {
    expect(render(<ToggleButton />)).toBeTruthy()
})

import React from 'react'
import { render } from '@testing-library/react'
import ComponentLoader from '.'

it('should create', () => {
    expect(render(<ComponentLoader />)).toBeTruthy()
})

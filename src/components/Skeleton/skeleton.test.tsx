import React from 'react'
import { render, screen } from '@testing-library/react'
import Skeleton from '.'
import SkeletonView from './skeleton.view'

describe('SkeletonComponet', () => {
    it('should create for text', () => {
        expect(render(<Skeleton type={'text'} />)).toBeTruthy()
    })
    it('should create for thumb', () => {
        expect(render(<Skeleton type={'thumb'} />)).toBeTruthy()
    })

    it('should have class skeleton--thumb', () => {
        render(<SkeletonView darkMode={false} type={'thumb'} />)

        const element = screen.getByTestId('skeleton')
        expect(element).toHaveClass('skeleton--thumb')
    })

    it('should have class skeleton skeleton--text', () => {
        render(<SkeletonView darkMode={false} type={'text'} />)

        const element = screen.getByTestId('skeleton')
        expect(element).toHaveClass('skeleton--text')
    })

    it('should have class dark', () => {
        render(<SkeletonView darkMode={true} type={'thumb'} />)

        const element = screen.getByTestId('skeleton')
        expect(element).toHaveClass('dark-bg-clear')
    })
})

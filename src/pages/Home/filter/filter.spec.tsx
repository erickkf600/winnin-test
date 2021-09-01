import React from 'react'
import { render, screen } from '@testing-library/react'
import Filter from '.'

it('should create', () => {
    expect(
        render(
            <Filter darkMode={true} filterBy={'hot'} setFilter={jest.fn()} />,
        ),
    ).toBeTruthy()
})

it('should have class filter', () => {
    render(<Filter darkMode={true} filterBy={'hot'} setFilter={jest.fn()} />)
    const element = screen.getByTestId('filter')
    expect(element).toHaveClass('filter')
})

it('should set hot button as active', () => {
    render(<Filter darkMode={false} filterBy={'hot'} setFilter={jest.fn()} />)
    const element = screen.getAllByTestId('filter-button')
    element[0].click()
    expect(element[0]).toHaveClass('active')
})

it('should set hot button as active dark', () => {
    render(<Filter darkMode={true} filterBy={'hot'} setFilter={jest.fn()} />)
    const element = screen.getAllByTestId('filter-button')
    element[0].click()
    expect(element[0]).toHaveClass('dark-bg-clear active')
})

it('should set new button as active', () => {
    render(<Filter darkMode={false} filterBy={'new'} setFilter={jest.fn()} />)
    const element = screen.getAllByTestId('filter-button')
    element[1].click()
    expect(element[1]).toHaveClass('active')
})

it('should set new button as active dark', () => {
    render(<Filter darkMode={true} filterBy={'new'} setFilter={jest.fn()} />)
    const element = screen.getAllByTestId('filter-button')
    element[1].click()
    expect(element[1]).toHaveClass('dark-bg-clear active')
})

it('should set rising button as active', () => {
    render(
        <Filter darkMode={false} filterBy={'rising'} setFilter={jest.fn()} />,
    )
    const element = screen.getAllByTestId('filter-button')
    element[2].click()
    expect(element[2]).toHaveClass('active')
})

it('should set rising button as active dark', () => {
    render(<Filter darkMode={true} filterBy={'rising'} setFilter={jest.fn()} />)
    const element = screen.getAllByTestId('filter-button')
    element[2].click()
    expect(element[2]).toHaveClass('dark-bg-clear active')
})

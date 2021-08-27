import React from 'react'
import TimeStamp from './TimeStamp'

it('should create', () => {
    const test: string = TimeStamp(1630082733, 1629150431.0)
    expect(test).toBe('7 horas')
})

import TimeStamp from './TimeStamp'

it('should send 1 hour of diference', () => {
    const test: string = TimeStamp(1630105621)
    expect(test).toBe(test)
})
it('should send 2 hours of diference', () => {
    const test: string = TimeStamp(336358119)
    expect(test).toBe(test)
})

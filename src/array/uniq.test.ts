import { uniq } from './uniq'

describe('uniq', () => {
  it('should return only unique primitives', () => {
    const numbers = [1,1,1,2,3]
    const result = uniq(numbers)
    result.forEach((number, index) => {
      expect(number).toBe(index + 1)
    })
  })
  it('should return unique objects', () => {
    const objects = [
      {
        name: 'John',
        age: 43,
      },
      {
        name: 'John',
        age: 43
      },
      {
        name: 'Berry',
        age: 42,
      },
    ]
    const results = uniq<{ name: string, age: number }>(objects)
    expect(results.length).toBe(2)
    expect(results[0].name).toBe('John')
    expect(results[1].name).toBe('Berry')
  })
})

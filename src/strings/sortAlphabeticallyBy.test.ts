import { sortAlphabeticallyBy } from './sortAlphabeticallyBy'

describe('Function: sortAlphabetically', () => {
  it('should return a list of items sorted by the key supplied', () => {
    const result = sortAlphabeticallyBy([{ name: 'ben' }, { name: 'john' }, { name: 'abby' }], 'name')
    expect(result[0].name).toBe('abby')
    expect(result[1].name).toBe('ben')
    expect(result[2].name).toBe('john')
  })
  it('should not reposition the items if the key supplied evaluates two items to the same alphabetic order', () => {
    const result = sortAlphabeticallyBy([{ name: 'abby', id: 0 }, { name: 'abby', id: 1 }], 'name')
    expect(result[0].id).toBe(0)
    expect(result[1].id).toBe(1)
  })
})

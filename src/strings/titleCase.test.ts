import { titleCase } from './titleCase'

describe('Function: titleCase', () => {
  it('should return a string where the first letter of each word is Capitalized', () => {
    const tables = [
      {
        input: 'school districts',
        expected: 'School Districts'
      },
    ]

    tables.forEach(({ input, expected }) => {
      const result = titleCase(input)
      expect(result).toBe(expected)
    })
  })
})

import { isEmptyObject } from './isEmptyObject'

const tables = [
  {
    input: { name: 'Chuck' },
    expectation: false,
  },
  {
    input: {},
    expectation: true,
  },
]

describe('Function: isEmptyObject', () => {
  tables.forEach(t => {
    it(`should return ${t.expectation} when given ${JSON.stringify(t.input)}`, () => {
      const result = isEmptyObject(t.input)
      expect(result).toBe(t.expectation)
    })
  })
})

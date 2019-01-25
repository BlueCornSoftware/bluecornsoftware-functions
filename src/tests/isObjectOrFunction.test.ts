import { isObjectOrFunction } from './isObjectOrFunction'

describe('Function: isObjectOrFunction', () => {
  it(`should return true when given an object or function`, () => {
    [{}, () => {}].forEach(expectToBe(true))
  })
  it('should return false when given strings, numbers, etc', () => {
    ['', 2].forEach(expectToBe(false))
  })
})

function expectToBe(b) {
  return (t) => {
    expect(isObjectOrFunction(t)).toBe(b)
  }
}

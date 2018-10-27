import { randomExclusiveWholeNumber } from './randomExclusiveWholeNumber'

describe('randomExclusiveWholeNumber', () => {
  it('should return 2 if given 1 and 3', () => {
    const result = randomExclusiveWholeNumber(3, 1)
    expect(result).toBe(2)
  })
})

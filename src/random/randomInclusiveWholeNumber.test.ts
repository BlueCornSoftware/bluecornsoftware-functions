import { randomInclusiveWholeNumber } from './randomInclusiveWholeNumber'

describe('randomInclusiveWholeNumber', () => {
  it('should always return a number that could be either the upper or lower limit', () => {
    const result = randomInclusiveWholeNumber(1, 1)
    expect(result).toBe(1)
  })
  it('should produce value between those specified', () => {
    const result = randomInclusiveWholeNumber(0, 20)
    expect(result).toBeLessThanOrEqual(20)
    expect(result).toBeGreaterThanOrEqual(0)
  })
})

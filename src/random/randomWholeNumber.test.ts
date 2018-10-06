import { randomWholeNumber } from './randomWholeNumber'

describe('randomWholeNumber', () => {
  it('should always return a number between those specified', () => {
    const result = randomWholeNumber(1, 3)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(3)
  });
  it('should return an exclusive value if inclusive is false', () => {
    const result = randomWholeNumber(1, 3, { inclusive: false })
    expect(result).toBe(2)
  })
  it('should return a number inclusive between 0 and x when no second arg specified', () => {
    const result = randomWholeNumber(1)
    expect(result).toBeLessThanOrEqual(1)
  })
});

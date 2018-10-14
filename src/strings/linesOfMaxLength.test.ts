import { linesOfMaxLength } from './linesOfMaxLength'

describe('linesOfMaxLength', () => {
  it('should return an array where all but the last element are of maxLength', () => {
    const lines = linesOfMaxLength('Hey You', 3)
    expect(lines[0].length).toBe(3)
    expect(lines[1].length).toBe(3)
    expect(lines[2].length).toBe(1)
  })
  it('should not add more elements than needed', () => {
    const lines = linesOfMaxLength('HeyYou', 3)
    expect(lines.length).toBe(2)
  })
  it('should return one element if the maxlength is greater than the strings length', () => {
    const lines = linesOfMaxLength('Hey You', 20)
    expect(lines.length).toBe(1)
  })
  it('should return an empty array if maxLength is zero or less', () => {
    const lines = linesOfMaxLength('Hey You', 0)
    expect(lines.length).toBe(0)
  })
})

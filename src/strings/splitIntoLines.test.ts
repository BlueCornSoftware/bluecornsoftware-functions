import { linesOfMaxLength } from './linesOfMaxLength'

const splitIntoLines = (sentence: string, maxLength: number): string[] => {
  let lines = linesOfMaxLength(sentence, maxLength)
  // Remove all leading and trailing whitespace
  lines = lines.map(line => line.trim())

  // shuffle back where each line has fewer than max elements
  return lines
}

describe('splitIntoLines', () => {
  it('should not break spaces across lines', () => {
    const lines = splitIntoLines('Hey You Guys', 3)
    expect(lines[1][0]).not.toBe(' ')
  })
})

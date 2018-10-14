import { linesOfMaxLength } from './linesOfMaxLength'


const splitIntoLines = (sentence: string, maxLength: number): string[] => {
  const lines = linesOfMaxLength(sentence, maxLength)

  return lines
}

describe('splitIntoLines', () => {
  it('should not break spaces across lines', () => {
    const lines = splitIntoLines('Hey You Guys', 3)
    expect(lines[1]).toBe('You')
  })
  it('breaks words that are longer than line length', () => {
    const lines = splitIntoLines('OnceUponATime you dressed so fine', 4)
    expect(lines[1]).toBe('Upon')
  })
})

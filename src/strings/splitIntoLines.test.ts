import { linesOfMaxLength } from './linesOfMaxLength'

// This function is for splitting up a sentence in a way that would usually please the eye

const splitIntoLines = (sentence: string, maxLength: number): string[] => {
  return linesOfMaxLength(sentence, maxLength)
}

xdescribe('splitIntoLines', () => {
  it('should not break spaces across lines', () => {
    const lines = splitIntoLines('Hey You Guys', 3)
    expect(lines[1]).toBe('You')
  })
  it('never breaks words', () => {
    const lines = splitIntoLines('Hello Jon', 4)
    expect(lines[0]).toBe('Hello')
  })
  it('breaks at spaces if adding the next word would make current line > maxLength', () => {
    const lines = splitIntoLines('Hello Mary Lou', 6)
    expect(lines[0]).toBe('Hello')
    expect(lines[1]).toBe('Mary')
    expect(lines[2]).toBe('Lou')
  })
})

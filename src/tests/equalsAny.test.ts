import { equalsAny } from './equalsAny'

describe('Function: equalsAny', () => {
  it('returns an evaluator that checks a subject against original args', () => {
    const isOneOrTwo = equalsAny(1, 2)
    const tables = [
      buildTable(1, true),
      buildTable(2, true),
      buildTable(3, false),
      buildTable(null, false),
    ]
    let result
    tables.forEach(t => {
      result = isOneOrTwo(t.input)
      expect(result).toBe(t.expectation)
    })
  })
})

function buildTable(input: any, expectation: any) {
  return {
    input,
    expectation,
  }
}

import { intersection } from './intersection'

const tables = [
  withInputs([1, 2], [3, 4]).expect([]),
  withInputs([1], [1, 4]).expect([1]),
  withInputs([{ name: 'Jake' }], [{ name: 'Jake' }, 4]).expect([{ name: 'Jake' }]),
  withInputs([{ age: 3 }], [{ name: 'Jake' }, 4]).expect([]),
  withInputs([b => b], [b => b]).expect([b => b])
]

describe('Function: intersection', () => {
  let result
  tables.forEach(t => {
    (t.pendResult ? xit : it)(getItSentence(t), () => {
      result = intersection(t.inputs[0], t.inputs[1])
      expect(result.toString()).toBe(t.expectation.toString())
    })
  })
})

function getItSentence(t) {
  const expectString = JSON.stringify(t.expectation)
  const inputOneString = JSON.stringify(t.inputs[0])
  const inputTwoString = JSON.stringify(t.inputs[1])

  return `should return ${expectString} when given ${inputOneString} and ${inputTwoString}`
}

function withInputs(...inputs) {
  return {
    expect: (expectation, options = { pendResult: false }) => ({ inputs, expectation, ...options })
  }
}
import { buildQueryString } from './buildQueryString'

class A {
  name = 'Paul'
  sayHello = () => {
    return this.name
  }
}

describe('Function: buildQueryString', () => {
  const tables = [
    t({ name: 'John' }, '?name=John'),
    t({ name: 'John', age: 34 }, '?name=John&age=34'),
    t({ name: 'John Adams' }, '?name=John%20Adams'),
    t(new A(), '?name=Paul')
  ]
  tables.forEach(t => {
    let result
    it(`should return ${t.expectation} when given ${JSON.stringify(t.input)}`, () => {
      result = buildQueryString(t.input)
      expect(result).toBe(t.expectation)
    })
  })
})

function t(input, expectation) {
  return {
    input,
    expectation,
  }
}

import { uniqueBy } from './uniqueBy'

describe('uniqueBy', () => {

  it('should not return any item that does not have supplied key', () => {
    const results = uniqueBy([{ id: 1 }, { name: 'John' }], 'id')
    expect((results[0] as any).name).toBe(undefined)
    expect(results[0].id).toBe(1)
    expect(results.length).toBe(1)
  })

  it('should not return object with exact duplicate data', () => {
    const results = uniqueBy([{ id: 1 }, { id: 1 }], 'id')
    expect(results.length).toBe(1)
  })
})

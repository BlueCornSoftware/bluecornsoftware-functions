import { flatMap } from './flatMap'

describe('flatMap', () => {
  it('should unnest multidimensional arrays', () => {
    const multidimensionalArray = [
      [0,1],
      [2,3],
    ]
    const result = flatMap(multidimensionalArray, el => el)
    expect(result.length).toBe(4)
  })
})

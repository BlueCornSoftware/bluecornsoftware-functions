import { randomInclusiveWholeNumber } from './randomInclusiveWholeNumber'
import { randomExclusiveWholeNumber } from './randomExclusiveWholeNumber'

const isNumber = num => typeof num === 'number'


// TODO: come back to fullfill all configurable execution paths
export const randomWholeNumber = (
  a: number,
  b?: number,
  opts?: {
    inclusive: {
      lower?: boolean
      upper?: boolean
    } | boolean
  }): number => {
    const bIsNumber = isNumber(b)
    let lowerLimit = bIsNumber ? Math.min(a, b) : 0
    let upperLimit = bIsNumber ? Math.max(a, b) : a

  if (opts) {
    const { inclusive } = opts
    if (typeof inclusive === 'boolean') {
      if (inclusive) {
        return randomInclusiveWholeNumber(upperLimit, lowerLimit)
      } else {
        return randomExclusiveWholeNumber(upperLimit - 1, lowerLimit + 1)
      }
    }
  } else {
    return randomInclusiveWholeNumber(upperLimit, lowerLimit)
  }
}

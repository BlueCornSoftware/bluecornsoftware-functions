import { randomInclusiveWholeNumber } from './randomInclusiveWholeNumber'
import { randomExclusiveWholeNumber } from './randomExclusiveWholeNumber'

export const randomWholeNumber = (
  a: number,
  b?: number,
  opts?: {
    inclusive: boolean
  }): number => {

    if (!opts) {
      return randomInclusiveWholeNumber(a, b)
    }

  const { inclusive } = opts
  if (typeof inclusive === 'boolean') {
    if (inclusive) {
      return randomInclusiveWholeNumber(a, b)
    } else {
      return randomExclusiveWholeNumber(Math.max(a, b), Math.min(a, b))
    }
  }
}

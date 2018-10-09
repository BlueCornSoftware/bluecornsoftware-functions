import { randomInclusiveWholeNumber } from './randomInclusiveWholeNumber'
import { randomExclusiveWholeNumber } from './randomExclusiveWholeNumber'

export const randomWholeNumber = (
  a: number,
  b?: number,
  opts?: {
    inclusive: boolean
  }): number => {

    if (!opts) {
      return randomInclusiveWholeNumber(a, b || 0)
    }

  const { inclusive } = opts
  if (typeof inclusive === 'boolean') {
    if (inclusive) {
      return randomInclusiveWholeNumber(a, b || 0)
    } else {
      return randomExclusiveWholeNumber(Math.max(a, b || 0), Math.min(a, b || 0))
    }
  }
  return randomInclusiveWholeNumber(a, b || 0)
}

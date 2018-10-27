import { randomInclusiveWholeNumber } from './randomInclusiveWholeNumber'

export const randomExclusiveWholeNumber = (a: number, b: number = 0): number =>
  randomInclusiveWholeNumber(Math.max(a, b) - 1, Math.min(a, b) + 1)

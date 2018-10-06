import { randomInclusiveWholeNumber } from './randomInclusiveWholeNumber'

export const randomExclusiveWholeNumber = (upperLimit: number, lowerLimit: number = 0): number =>
  randomInclusiveWholeNumber(upperLimit - 1, lowerLimit + 1)

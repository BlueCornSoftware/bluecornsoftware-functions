import { randomInclusiveWholeNumber } from './randomInclusiveWholeNumber'

export const randomExclusiveWholeNumber = (upperLimit: number, lowerLimit: number): number => {
  return randomInclusiveWholeNumber(upperLimit - 1, lowerLimit + 1)
}

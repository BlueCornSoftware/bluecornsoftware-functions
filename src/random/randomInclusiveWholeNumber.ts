const isNumber = (num: number) => typeof num === 'number'

export const randomInclusiveWholeNumber = (a: number, b: number): number => {
  const bIsNumber = isNumber(b)
  const lowerLimit = bIsNumber ? Math.min(a, b) : 0
  const upperLimit = bIsNumber ? Math.max(a, b) : a
  const randomSeed = Math.random() * (upperLimit - lowerLimit + 1)
  return Math.floor(randomSeed + lowerLimit)
}

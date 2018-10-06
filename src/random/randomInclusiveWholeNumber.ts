export const randomInclusiveWholeNumber = (upperLimit: number, lowerLimit: number = 0): number => {
  const randomSeed = Math.random() * (upperLimit - lowerLimit + 1)
  return Math.floor(randomSeed + lowerLimit)
}

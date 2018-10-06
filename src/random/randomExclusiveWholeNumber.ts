export const randomExclusiveWholeNumber = (upperLimit: number, lowerLimit: number = 0): number => {
  const upperAdjusted = upperLimit - 1
  const lowerAdjusted = lowerLimit + 1
  const randomSeed = Math.random() * (upperAdjusted - lowerAdjusted + 1)
  return Math.floor(randomSeed + lowerAdjusted)
}

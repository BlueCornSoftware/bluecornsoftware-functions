export const linesOfMaxLength = (longLine: string, maxLength: number): string[] => {
  if (maxLength <= 0) {
    return []

  }
  if (longLine.length < maxLength) {
    return [longLine]
  }
  const lines = []
  let left = 0
  while(longLine[left + maxLength] !== undefined) {
	  lines.push(longLine.substring(left, left + maxLength))
    left = left + maxLength
  }
  lines.push(longLine.substring(left))
  return lines
}

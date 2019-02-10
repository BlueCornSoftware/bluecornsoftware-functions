const replacer = (matchedText: string): string => matchedText.charAt(0).toUpperCase() + matchedText.substr(1).toLowerCase()

export const titleCase = (str: string): string => {
  return str.replace(/\w\S*/g, replacer)
}

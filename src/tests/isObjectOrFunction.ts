export const isObjectOrFunction = (subject: any): boolean => {
  const t = typeof subject
  return t === 'object' || t === 'function'
}

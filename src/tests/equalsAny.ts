export const equalsAny = (...args: any[]) => (subject: any) => {
  for (let i = 0; i < args.length; i++) {
    if (subject === args[i]) {
      return true
    }
  }
  return false
}

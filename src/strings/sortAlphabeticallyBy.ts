export function sortAlphabeticallyBy<T>(list: T[], key: string): T[] {
  return list.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1
    }
    if (a[key] < b[key]) {
      return -1
    }
    return 0
  })
}

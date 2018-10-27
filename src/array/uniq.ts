export function uniq<T>(list: T[]): T[] {
  const table = {}

  for (const item of list) {
    if (typeof item === 'object') {
      table[JSON.stringify(item)] = item
    } else {
      table[String(item)] = item
    }
  }

  return Object.values(table)
}

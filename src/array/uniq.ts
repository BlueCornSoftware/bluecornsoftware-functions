export function uniq<T>(list: T[]): T[] {
  const table = {}

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'object') {
      table[JSON.stringify(list[i])] = list[i]
    } else {
      table[String(list[i])] = list[i]
    }
  }

  return Object.values(table)
}

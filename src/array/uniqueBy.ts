export function uniqueBy<T>(items: T[], key: string): T[] {
  const itemsWithKey = items.filter(item => item.hasOwnProperty && item.hasOwnProperty(key))
  const table = {}

  for (const item of itemsWithKey) {
    table[item[key]] = item
  }
  
  return Object.values(table)
}

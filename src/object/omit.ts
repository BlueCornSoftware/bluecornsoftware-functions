export function omit<T extends object>(obj: T, ...bannedKeys): Partial<T> {
  const copy: T = { ...obj as object } as T
  for (let i = 0; i < bannedKeys.length; i++) {
    delete copy[bannedKeys[i]]
  }
  return copy
}

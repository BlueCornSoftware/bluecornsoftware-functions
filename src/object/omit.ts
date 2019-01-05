export function omit(obj, ...bannedKeys) {
  const copy = { ...obj }
  for (let i = 0; i < bannedKeys.length; i++) {
    delete copy[bannedKeys[i]]
  }
  return copy;
}

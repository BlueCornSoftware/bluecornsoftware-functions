export type GUID = string

const table = {};

const s = (): string => Math
  .floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1)

const uuid = () => s() + s() + '-' + s() + '-' + s() + '-' + s() + '-' + s() + s() + s();

export const guid = (): GUID => {
  let u = uuid()
  while(table[u]) {
    u = uuid()
  }
  table[u] = true
  return u
}

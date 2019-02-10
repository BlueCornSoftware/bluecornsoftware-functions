export const isEmptyObject = (o: object): boolean => {
  return typeof o === 'object' && Object.keys(o).length === 0
}

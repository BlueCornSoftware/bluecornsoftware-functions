export function intersection<T, K>(arr1: Array<T | K>, arr2: Array<T | K>): Array<T | K> {
  let shortArr = arr1
  let longArr = arr2
  if (arr2.length < arr1.length) {
    shortArr = arr2
    longArr = arr1
  }
  
  const table = {}

  for (let i = 0; i < shortArr.length; i++) {
    if (
      typeof shortArr[i] !== 'object' &&
      typeof shortArr[i] !== 'function'
    ) {
	  table[String(shortArr[i])] = shortArr[i]
    } else if (
      typeof shortArr[i] === 'object'
    ) {
	  table[
        JSON.stringify(shortArr[i])
      ] = shortArr[i]
    }
  }

  const common = []

  let el
  for (let j = 0; j < longArr.length; j++) {
    el = longArr[j]
    if (
      typeof el !== 'object' &&
      typeof el !== 'function'
    ) {
	  if (table[String(el)]) {
        common.push(el)
      }
    } else if (
      typeof el === 'object'
    ) {
	  if (table[ JSON.stringify(el) ]) {
		common.push(el)
      }
    }
  }
  return common
}

import { isObjectOrFunction } from '../tests/isObjectOrFunction'

export function intersection<T, K>(arr1: T[], arr2: K[]): Array<T | K> {
  const table = createTableFromArray(arr1)
  const common = []
  let element
  for (let j = 0; j < arr2.length; j++) {
    element = arr2[j]
    if (!foundInTable(table, element)) {
      continue
    }
    common.push(element)
  }
  return common
}

/////////////////////

function createTableFromArray(arr) {
  const table = {}
  let el
  for (let i = 0; i < arr.length; i++) {
    el = arr[i]
    if (!isObjectOrFunction(el)) {
	    table[String(el)] = el
    } else if (isObjectOrFunction(el)) {
	    table[JSON.stringify(el)] = el
    }
  }
  return table
}

function foundInTable(table, el) {
  if (!isObjectOrFunction(el)) {
    return !!table[String(el)]
  } else {
    return !!table[JSON.stringify(el)]
  }
}

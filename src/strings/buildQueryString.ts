import { isEmptyObject } from '../object/isEmptyObject'

export const buildQueryString = (queryMap: object): string => {
  if (!queryMap || isEmptyObject(queryMap)) {
    return ''
  }
  let queryString = '?'
  for (let key in queryMap) {
    if (
      !queryMap.hasOwnProperty(key) || 
      typeof queryMap[key] === 'function'
    ) {
      continue
    }
    queryString += key + '=' + queryMap[key] + '&'
  }
  if (queryString.charAt(queryString.length - 1) === '&') {
    queryString = queryString.slice(0, -1)
  }
  return queryString.replace(' ', '%20')
}

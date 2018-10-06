import { MappingFunction } from './types'

const concat = (x, y) => x.concat(y)

export default (array: any[], func: MappingFunction) => array.map(func).reduce(concat, [])

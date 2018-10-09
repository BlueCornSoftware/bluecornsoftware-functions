import { MappingFunction } from './MappingFunction.type'

const concat = (x: any[], y: any[]) => x.concat(y)

export const flatMap = (array: any[], func: MappingFunction) => array.map(func).reduce(concat, [])

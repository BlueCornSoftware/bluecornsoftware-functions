const concat = (x: any[], y: any[]) => x.concat(y)

export const flatMap = (array: any[], func: (value: any, index?: number, array?: any[]) => any[]) => array.map(func).reduce(concat, [])

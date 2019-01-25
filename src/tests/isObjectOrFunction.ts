import { equalsAny } from "./equalsAny"

export const isObjectOrFunction = (subject: any): boolean =>
  equalsAny('function', 'object')(typeof (subject))

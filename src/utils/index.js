import { isString, indexOf } from 'lodash'
export function toBoolean(string) {
  var areTrue = ['yes', 'true', true, 'y', 1, '1']
  if (isString(string)) {
    string = string.toLowerCase()
  }

  return indexOf(areTrue, string) > -1
}

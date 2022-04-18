import { countBy } from "lodash";

export const getKeyByValue = (
  object: { [key: string]: string },
  value: string) => {
  return Object.keys(object).find(key => object[key] === value);
}

export const trimSpace = (value: string) => {
  let output = value
  output = output.trimLeft()
  output = output.trimRight()
  return output
}

export const countOccurence = (str: string, ch: string) => countBy(str)[ch] || 0

import { IDeal } from '../../schema/Deal'
import { toInteger } from 'chinese-numbers-to-arabic'

const parseFloor = (row: IDeal) => {
  // console.log(row.floor === '', row.floor)
  if (row.floor === '' || row.floor.indexOf('層') === -1) {
    row.parsedValue.floor = {
      value: undefined,
      success: false
    }
    return
  }
  try {
    row.parsedValue.floor = {
      value: toInteger(row.floor),
      success: true
    }
  } catch {
    row.parsedValue.floor = {
      value: undefined,
      success: false
    }
  }
}

export default parseFloor

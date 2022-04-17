import { IDeal } from '../../schema/Deal'
import { toInteger } from 'chinese-numbers-to-arabic'

const parseTransferFloor = (row: IDeal) => {
  // console.log(row.floor === '', row.floor)
  if (row.transferFloor === '' || row.transferFloor.indexOf('層') === -1) {
    row.parsedValue.transferFloor = {
      value: undefined,
      success: false
    }
    return
  }
  try {
    row.parsedValue.transferFloor = {
      value: toInteger(row.transferFloor),
      success: true
    }
  } catch {
    row.parsedValue.transferFloor = {
      value: undefined,
      success: false
    }
  }
}

export default parseTransferFloor

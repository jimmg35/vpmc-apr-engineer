import { IDeal } from '../../schema/Deal'
import { toInteger } from 'chinese-numbers-to-arabic'
import { Status } from '../../schema/Status'

const parseTransferFloor = (row: IDeal) => {
  // console.log(row.floor === '', row.floor)
  if (row.transferFloor === '' || row.transferFloor.indexOf('層') === -1) {
    row.parsedValue.transferFloor = {
      value: undefined,
      status: Status.semanticError
    }
    return
  }
  try {
    row.parsedValue.transferFloor = {
      value: toInteger(row.transferFloor),
      status: Status.success
    }
  } catch {
    row.parsedValue.transferFloor = {
      value: undefined,
      status: Status.parseError
    }
  }
}

export default parseTransferFloor

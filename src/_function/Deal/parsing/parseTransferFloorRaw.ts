import { IDeal } from '../../../schema/deal'
import { toInteger } from 'chinese-numbers-to-arabic'
import { Status } from '../../../schema/status'
import { trimSpace, countOccurence } from '../../../utility'

const parseTransferFloorRaw = (row: IDeal) => {
  const value = trimSpace(row.transferFloor)
  if (value === '') {
    row.parsedValue.transferFloorRaw = {
      value: undefined,
      status: Status.success
    }
  } else {
    row.parsedValue.transferFloorRaw = {
      value: value,
      status: Status.success
    }
  }
}

export default parseTransferFloorRaw

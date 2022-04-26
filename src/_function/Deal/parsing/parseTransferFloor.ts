import { IDeal } from '../../../schema/deal'
import { toInteger } from 'chinese-numbers-to-arabic'
import { Status } from '../../../schema/status'
import { trimSpace, countOccurence } from '../../../utility'

const parseTransferFloor = (row: IDeal) => {
  const value = trimSpace(row.transferFloor)
  if (
    value === '' ||
    value.indexOf('地下') !== -1 ||
    countOccurence(value, '層') !== 1
  ) {
    row.parsedValue.transferFloor = {
      value: undefined,
      status: Status.semanticError
    }
    return
  }
  try {
    row.parsedValue.transferFloor = {
      value: toInteger(value),
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

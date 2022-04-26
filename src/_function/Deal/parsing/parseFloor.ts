import { IDeal } from '../../../schema/deal'
import { toInteger } from 'chinese-numbers-to-arabic'
import { Status } from '../../../schema/status'
import { trimSpace } from '../../../utility'

const parseFloor = (row: IDeal) => {
  const value = trimSpace(row.floor)
  if (
    value === '' ||
    value.indexOf('層') === -1
  ) {
    row.parsedValue.floor = {
      value: undefined,
      status: Status.semanticError
    }
    return
  }
  try {
    row.parsedValue.floor = {
      value: toInteger(value),
      status: Status.success
    }
  } catch {
    row.parsedValue.floor = {
      value: undefined,
      status: Status.parseError
    }
  }
}

export default parseFloor

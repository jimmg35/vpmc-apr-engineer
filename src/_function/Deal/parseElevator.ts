import { IDeal } from '../../schema/deal'
import { Status } from '../../schema/status'
import { trimSpace } from '../../utility'
import { hasElevator } from '../../schema/enum'

const parseElevator = (row: IDeal) => {
  const value = trimSpace(row.hasElevator)
  if (value === '無') {
    row.parsedValue.hasElevator = {
      value: hasElevator.false,
      status: Status.success
    }
  } else if (value === '有') {
    row.parsedValue.hasElevator = {
      value: hasElevator.true,
      status: Status.success
    }
  } else {
    row.parsedValue.hasElevator = {
      value: hasElevator.uncertain,
      status: Status.semanticError
    }
  }
}

export default parseElevator

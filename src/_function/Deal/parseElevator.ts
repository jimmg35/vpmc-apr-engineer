import { IDeal } from '../../schema/Deal'
import { Status } from '../../schema/Status'

export enum hasElevator {
  false = 0,
  true = 1,
  uncertain = 2
}

const parseElevator = (row: IDeal) => {
  if (row.hasElevator === '無') {
    row.parsedValue.hasElevator = {
      value: hasElevator.false,
      status: Status.success
    }
  } else if (row.hasElevator === '有') {
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

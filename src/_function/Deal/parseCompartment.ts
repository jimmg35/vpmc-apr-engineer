import { IDeal } from '../../schema/Deal'
import { Status } from '../../schema/Status'
import { trimSpace } from '../../utility'

export enum hasCompartment {
  false = 0,
  true = 1,
  uncertain = 2
}

const parseCompartment = (row: IDeal) => {
  const value = trimSpace(row.hasCompartment)
  if (value === '無') {
    row.parsedValue.hasCompartment = {
      value: hasCompartment.false,
      status: Status.success
    }
  } else if (value === '有') {
    row.parsedValue.hasCompartment = {
      value: hasCompartment.true,
      status: Status.success
    }
  } else {
    row.parsedValue.hasCompartment = {
      value: hasCompartment.uncertain,
      status: Status.success
    }
  }
}

export default parseCompartment

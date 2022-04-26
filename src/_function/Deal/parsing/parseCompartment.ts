import { IDeal } from '../../../schema/deal'
import { Status } from '../../../schema/status'
import { trimSpace } from '../../../utility'
import { hasCompartment } from '../../../schema/enum'

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

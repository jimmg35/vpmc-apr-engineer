import { IDeal } from '../../schema/Deal'

const parseCompartment = (row: IDeal) => {
  if (row.hasCompartment === '無') {
    row.parsedValue.hasCompartment = {
      value: 0,
      success: true
    }
  } else if (row.hasCompartment === '有') {
    row.parsedValue.hasCompartment = {
      value: 1,
      success: true
    }
  } else {
    row.parsedValue.hasCompartment = {
      value: 2,
      success: true
    }
  }
}

export default parseCompartment

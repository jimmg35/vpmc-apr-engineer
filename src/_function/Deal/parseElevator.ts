import { IDeal } from '../../schema/Deal'

const parseElevator = (row: IDeal) => {
  if (row.hasElevator === '無') {
    row.parsedValue.hasElevator = {
      value: 0,
      success: true
    }
  } else if (row.hasElevator === '有') {
    row.parsedValue.hasElevator = {
      value: 1,
      success: true
    }
  } else {
    row.parsedValue.hasElevator = {
      value: 2,
      success: true
    }
  }
}

export default parseElevator

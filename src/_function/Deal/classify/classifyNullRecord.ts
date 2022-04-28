import { IDeal } from '../../../schema/deal'

const classifyNullRecord = (row: IDeal) => {
  if (row.parsedValue.buildingAmount?.value === 0) {
    return false
  }
  return true
}

export default classifyNullRecord

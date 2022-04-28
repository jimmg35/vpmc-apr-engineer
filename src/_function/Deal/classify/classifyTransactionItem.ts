import { IDeal } from '../../../schema/deal'

const classifyTransactionItem = (row: IDeal) => {
  if (row.parsedValue.buildingAmount?.value === 0) {
    return false
  }
  return true
}

export default classifyTransactionItem

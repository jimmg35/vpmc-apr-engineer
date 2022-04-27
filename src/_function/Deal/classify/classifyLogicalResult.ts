import { IDeal } from '../../../schema/deal'
import { mapKeys } from 'lodash'

const classifyLogicalResult = (row: IDeal): boolean => {
  let status = true
  mapKeys(row.logicalExamine, (value, key) => {
    if (!value) {
      status = false
      return
    }
  })
  return status
}

export default classifyLogicalResult

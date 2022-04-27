import { IDeal } from '../../../schema/deal'
import { mapKeys } from 'lodash'

const classifyParsingResult = (row: IDeal): boolean => {
  let status = true
  mapKeys(row.parsedValue, (value, key) => {
    if (value?.status === 0) {
      status = false
      return
    }
  })
  return status
}

export default classifyParsingResult

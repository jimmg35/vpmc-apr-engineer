import { IDeal } from '../../../schema/deal'
import { mapKeys } from 'lodash'

const classifyNullRecord = (row: IDeal) => {
  let status = true
  mapKeys(row.parsedValue, (value, key) => {
    // @ts-ignore
    if (row.parsedValue[key].value === undefined) {
      // console.log(key, row.id)
      status = false
      // if (!status) console.log(key)
    }
  })
  mapKeys(row.calculatedPrice, (value, key) => {
    // @ts-ignore
    if (row.calculatedPrice[key] === undefined) {
      // console.log(key, row.id)
      status = false
      // if (!status) console.log(key)
    }
  })
  return status
}

export default classifyNullRecord

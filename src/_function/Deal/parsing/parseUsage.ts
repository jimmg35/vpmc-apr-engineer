import { IDeal } from '../../../schema/deal'
import { Status } from '../../../schema/status'
import { trimSpace } from '../../../utility'
import { urbanLandUse } from '../enum'

const parseUsage = (row: IDeal) => {
  const value = trimSpace(row.usage)
  if (value === '') {
    row.parsedValue.usage = {
      value: undefined,
      status: Status.success
    }
  } else {
    row.parsedValue.usage = {
      value: value,
      status: Status.success
    }
  }
}

export default parseUsage

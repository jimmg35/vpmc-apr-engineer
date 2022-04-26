import { IDeal } from '../../../schema/deal'
import { Status } from '../../../schema/status'
import { trimSpace } from '../../../utility'
import { nonUrbanLandUse } from '../../../schema/enum'

const parseNonUrbanLandUse = (row: IDeal) => {
  const value = trimSpace(row.nonUrbanLandUse)
  if (value === '') {
    row.parsedValue.nonUrbanLandUse = {
      value: nonUrbanLandUse.none,
      status: Status.success
    }
  } else if (value === '住宅區') {
    row.parsedValue.nonUrbanLandUse = {
      value: nonUrbanLandUse.resident,
      status: Status.success
    }
  } else if (value === '特定專用區') {
    row.parsedValue.nonUrbanLandUse = {
      value: nonUrbanLandUse.special,
      status: Status.success
    }
  } else {
    row.parsedValue.nonUrbanLandUse = {
      value: undefined,
      status: Status.semanticError
    }
  }
}

export default parseNonUrbanLandUse

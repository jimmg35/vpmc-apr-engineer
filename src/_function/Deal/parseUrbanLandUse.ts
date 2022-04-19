import { IDeal } from '../../schema/Deal'
import { Status } from '../../schema/Status'
import { trimSpace } from '../../utility'

export enum urbanLandUse {
  resident = 0,
  business = 1,
  other = 2,
  none = 3,
  industry = 4,
  agriculture = 5
}

const parseUrbanLandUse = (row: IDeal) => {
  const value = trimSpace(row.urbanLandUse)
  if (value === '住') {
    row.parsedValue.urbanLandUse = {
      value: urbanLandUse.resident,
      status: Status.success
    }
  } else if (value === '商') {
    row.parsedValue.urbanLandUse = {
      value: urbanLandUse.business,
      status: Status.success
    }
  } else if (value === '其他') {
    row.parsedValue.urbanLandUse = {
      value: urbanLandUse.other,
      status: Status.success
    }
  } else if (value === '') {
    row.parsedValue.urbanLandUse = {
      value: urbanLandUse.none,
      status: Status.success
    }
  } else if (value === '工') {
    row.parsedValue.urbanLandUse = {
      value: urbanLandUse.industry,
      status: Status.success
    }
  } else if (value === '農') {
    row.parsedValue.urbanLandUse = {
      value: urbanLandUse.agriculture,
      status: Status.success
    }
  } else {
    row.parsedValue.urbanLandUse = {
      value: undefined,
      status: Status.semanticError
    }
  }
}

export default parseUrbanLandUse

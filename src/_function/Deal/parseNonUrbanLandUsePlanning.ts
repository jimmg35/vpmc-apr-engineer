import { IDeal } from '../../schema/Deal'
import { Status } from '../../schema/Status'
import { trimSpace } from '../../utility'

export enum nonUrbanLandUse {
  none = 0
}

const parseNonUrbanLandUsePlanning = (row: IDeal) => {
  const value = trimSpace(row.nonUrbanLandUse)
  if (value === '') {
    row.parsedValue.nonUrbanLandUse = {
      value: nonUrbanLandUse.none,
      status: Status.success
    }
  } else {
    row.parsedValue.nonUrbanLandUse = {
      value: undefined,
      status: Status.semanticError
    }
  }
}

export default parseNonUrbanLandUsePlanning

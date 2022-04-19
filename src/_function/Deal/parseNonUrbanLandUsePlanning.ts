import { IDeal } from '../../schema/Deal'
import { Status } from '../../schema/Status'
import { trimSpace } from '../../utility'

export enum nonUrbanLandUsePlanning {
  none = 0
}

const parseNonUrbanLandUsePlanning = (row: IDeal) => {
  const value = trimSpace(row.nonUrbanLandUsePlanning)
  if (value === '') {
    row.parsedValue.nonUrbanLandUsePlanning = {
      value: nonUrbanLandUsePlanning.none,
      status: Status.success
    }
  } else {
    row.parsedValue.nonUrbanLandUsePlanning = {
      value: undefined,
      status: Status.semanticError
    }
  }
}

export default parseNonUrbanLandUsePlanning

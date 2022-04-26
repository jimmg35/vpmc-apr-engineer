import { IDeal } from '../../../schema/deal'
import { Status } from '../../../schema/status'
import { trimSpace } from '../../../utility'
import { nonUrbanLandUsePlanning } from '../enum'


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

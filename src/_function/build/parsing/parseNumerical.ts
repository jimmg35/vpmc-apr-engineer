import { IBuild } from '../../../schema/deal'
import { Status } from '../../../schema/status'
import { trimSpace } from '../../../utility'

const parseNumericalBuild = (row: IBuild) => {

  if (trimSpace(row.buildingTransferArea) === '') {
    row.parsedValue.buildingTransferArea = {
      value: 0,
      status: Status.semanticError
    }
  } else {
    row.parsedValue.buildingTransferArea = {
      value: Number(row.buildingTransferArea),
      status: Status.success
    }
  }

}

export default parseNumericalBuild

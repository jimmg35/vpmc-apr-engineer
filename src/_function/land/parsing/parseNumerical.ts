import { ILand } from '../../../schema/deal'
import { Status } from '../../../schema/status'
import { trimSpace } from '../../../utility'

const parseNumericalLand = (row: ILand) => {

  if (trimSpace(row.landTransferArea) === '') {
    row.parsedValue.landTransferArea = {
      value: 0,
      status: Status.semanticError
    }
  } else {
    row.parsedValue.landTransferArea = {
      value: Number(row.landTransferArea),
      status: Status.success
    }
  }

  if (trimSpace(row.rightDenumerate) === '') {
    row.parsedValue.rightDenumerate = {
      value: 0,
      status: Status.semanticError
    }
  } else {
    row.parsedValue.rightDenumerate = {
      value: Number(row.rightDenumerate),
      status: Status.success
    }
  }

  if (trimSpace(row.rightNumerate) === '') {
    row.parsedValue.rightNumerate = {
      value: 0,
      status: Status.semanticError
    }
  } else {
    row.parsedValue.rightNumerate = {
      value: Number(row.rightNumerate),
      status: Status.success
    }
  }

}

export default parseNumericalLand

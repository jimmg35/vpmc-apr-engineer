import { trimSpace } from "../../../utility"
import { IPark } from "../../../schema/deal"
import { Status } from "../../../schema/status"

const parseNumericalPark = (row: IPark) => {

  if (trimSpace(row.parkingSpacePrice) === '') {
    row.parsedValue.parkingSpacePrice = {
      value: 0,
      status: Status.semanticError
    }
  } else {
    row.parsedValue.parkingSpacePrice = {
      value: Number(row.parkingSpacePrice),
      status: Status.success
    }
  }

  if (trimSpace(row.parkingSpaceTransferArea) === '') {
    row.parsedValue.parkingSpaceTransferArea = {
      value: 0,
      status: Status.semanticError
    }
  } else {
    row.parsedValue.parkingSpaceTransferArea = {
      value: Number(row.parkingSpaceTransferArea),
      status: Status.success
    }
  }

}

export default parseNumericalPark

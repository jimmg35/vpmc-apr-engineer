import { IDeal } from '../../../schema/deal'
import { Status } from '../../../schema/status'
import { trimSpace } from '../../../utility'

const parseNumerical = (row: IDeal) => {
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

  if (trimSpace(row.price) === '') {
    row.parsedValue.price = {
      value: 0,
      status: Status.semanticError
    }
  } else {
    row.parsedValue.price = {
      value: Number(row.price),
      status: Status.success
    }
  }

  if (trimSpace(row.unitPrice) === '') {
    row.parsedValue.unitPrice = {
      value: 0,
      status: Status.semanticError
    }
  } else {
    row.parsedValue.unitPrice = {
      value: Number(row.unitPrice),
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

  row.parsedValue.landTransferArea = {
    value: Number(row.landTransferArea),
    status: Status.success
  }
  row.parsedValue.roomNumber = {
    value: Number(row.roomNumber),
    status: Status.success
  }
  row.parsedValue.hallNumber = {
    value: Number(row.hallNumber),
    status: Status.success
  }
  row.parsedValue.bathNumber = {
    value: Number(row.bathNumber),
    status: Status.success
  }
  row.parsedValue.buildingArea = {
    value: Number(row.buildingArea),
    status: Status.success
  }
  row.parsedValue.subBuildingArea = {
    value: Number(row.subBuildingArea),
    status: Status.success
  }
  row.parsedValue.belconyArea = {
    value: Number(row.belconyArea),
    status: Status.success
  }
}

export default parseNumerical

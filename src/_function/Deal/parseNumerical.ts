import { IDeal } from '../../schema/Deal'

const parseNumerical = (row: IDeal) => {
  row.parsedValue.landTransferArea = {
    value: Number(row.landTransferArea),
    success: true
  }
  row.parsedValue.buildingTransferArea = {
    value: Number(row.buildingTransferArea),
    success: true
  }
  row.parsedValue.roomNumber = {
    value: Number(row.roomNumber),
    success: true
  }
  row.parsedValue.hallNumber = {
    value: Number(row.hallNumber),
    success: true
  }
  row.parsedValue.bathNumber = {
    value: Number(row.bathNumber),
    success: true
  }
  row.parsedValue.price = {
    value: Number(row.price),
    success: true
  }
  row.parsedValue.unitPrice = {
    value: Number(row.unitPrice),
    success: true
  }
  row.parsedValue.parkingSpaceTransferArea = {
    value: Number(row.parkingSpaceTransferArea),
    success: true
  }
  row.parsedValue.parkingSpacePrice = {
    value: Number(row.parkingSpacePrice),
    success: true
  }
  row.parsedValue.buildingArea = {
    value: Number(row.buildingArea),
    success: true
  }
  row.parsedValue.subBuildingArea = {
    value: Number(row.subBuildingArea),
    success: true
  }
  row.parsedValue.belconyArea = {
    value: Number(row.belconyArea),
    success: true
  }
}

export default parseNumerical

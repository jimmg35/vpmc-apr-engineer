import { IDeal } from '../../../schema/deal'

const examineBuildingType = (row: IDeal) => {
  if (!row.parsedValue.floor?.value)
    return
  row.logicalExamine.buildingType = true
  if (row.parsedValue.buildingType?.value === 0) {
    if (row.parsedValue.floor?.value < 11) {
      row.logicalExamine.buildingType = false
    }
  } else if (row.parsedValue.buildingType?.value === 3) {
    if (row.parsedValue.floor?.value > 5) {
      row.logicalExamine.buildingType = false
    }
  } else if (row.parsedValue.buildingType?.value === 4) {
    if (row.parsedValue.floor?.value > 10) {
      row.logicalExamine.buildingType = false
    }
  }
}

export default examineBuildingType

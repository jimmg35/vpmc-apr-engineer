import { IDeal } from '../../schema/Deal'

const parseFloor = (row: IDeal) => {
  console.log(row.floor === '', row.floor)
  row.parsedValue.completionTime = {
    value: datetime,
    success: true
  }
}

export default parseFloor

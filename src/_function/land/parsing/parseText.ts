import { ILand } from '../../../schema/deal'
import { Status } from '../../../schema/status'

const parseTextLand = (row: ILand) => {

  row.parsedValue.id = {
    value: row.id,
    status: Status.success
  }

  row.parsedValue.address = {
    value: row.address,
    status: Status.success
  }

  row.parsedValue.landUse = {
    value: row.landUse,
    status: Status.success
  }

  row.parsedValue.parcelNumber = {
    value: row.parcelNumber,
    status: Status.success
  }

}

export default parseTextLand

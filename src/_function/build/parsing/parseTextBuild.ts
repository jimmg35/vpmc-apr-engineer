import { IBuild } from '../../../schema/deal'
import { Status } from '../../../schema/status'

const parseTextBuild = (row: IBuild) => {

  row.parsedValue.id = {
    value: row.id,
    status: Status.success
  }

  row.parsedValue.usage = {
    value: row.usage,
    status: Status.success
  }

  row.parsedValue.material = {
    value: row.material,
    status: Status.success
  }

  row.parsedValue.buildingLayer = {
    value: row.buildingLayer,
    status: Status.success
  }

}

export default parseTextBuild

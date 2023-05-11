import { trimSpace } from "../../../utility"
import { IPark } from "../../../schema/deal"
import { Status } from "../../../schema/status"
import { toInteger } from "chinese-numbers-to-arabic"

const parseParkLevel = (row: IPark) => {
  const value = trimSpace(row.locateLevel)
  if (
    value === '' || value === '無固定樓層'
  ) {
    row.parsedValue.locateLevel = {
      value: undefined,
      status: Status.semanticError
    }
    return
  }

  if (value.indexOf('樓') === -1) {
    row.parsedValue.locateLevel = {
      value: undefined,
      status: Status.semanticError
    }
    return
  }

  if (value.indexOf('地下') !== -1) {
    row.parsedValue.locateLevel = {
      value: -toInteger(value),
      status: Status.success
    }
    return
  }
  row.parsedValue.locateLevel = {
    value: toInteger(value),
    status: Status.success
  }

}

export default parseParkLevel

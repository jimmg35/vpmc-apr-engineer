import { IDeal } from '../../schema/Deal'
import { toInteger } from 'chinese-numbers-to-arabic'
import { Status } from '../../schema/Status'
import { trimSpace } from '../../utility'

const parseId = (row: IDeal) => {
  const value = trimSpace(row.id)
  if (value !== '') {
    row.parsedValue.id = {
      value: value,
      status: Status.success
    }
  } else {
    row.parsedValue.id = {
      value: value,
      status: Status.semanticError
    }
  }
}

export default parseId

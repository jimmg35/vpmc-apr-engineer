import { IDeal } from '../../schema/Deal'
import { Status } from '../../schema/Status'
import { trimSpace } from '../../utility'
import { hasCommittee } from '../../schema/enum'

const parseCommittee = (row: IDeal) => {
  const value = trimSpace(row.hasCommittee)
  if (value === '無') {
    row.parsedValue.hasCommittee = {
      value: hasCommittee.false,
      status: Status.success
    }
  } else if (value === '有') {
    row.parsedValue.hasCommittee = {
      value: hasCommittee.true,
      status: Status.success
    }
  } else {
    row.parsedValue.hasCommittee = {
      value: hasCommittee.uncertain,
      status: Status.semanticError
    }
  }
}

export default parseCommittee

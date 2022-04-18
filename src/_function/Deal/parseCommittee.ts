import { IDeal } from '../../schema/Deal'
import { Status } from '../../schema/Status'

export enum hasCommittee {
  false = 0,
  true = 1,
  uncertain = 2
}

const parseCommittee = (row: IDeal) => {
  if (row.hasCommittee === '無') {
    row.parsedValue.hasCommittee = {
      value: hasCommittee.false,
      status: Status.success
    }
  } else if (row.hasCommittee === '有') {
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

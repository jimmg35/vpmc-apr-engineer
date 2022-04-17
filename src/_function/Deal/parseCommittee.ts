import { IDeal } from '../../schema/Deal'

const parseCommittee = (row: IDeal) => {
  if (row.hasCommittee === '無') {
    row.parsedValue.hasCommittee = {
      value: 0,
      success: true
    }
  } else if (row.hasCommittee === '有') {
    row.parsedValue.hasCommittee = {
      value: 1,
      success: true
    }
  } else {
    row.parsedValue.hasCommittee = {
      value: 2,
      success: true
    }
  }
}

export default parseCommittee

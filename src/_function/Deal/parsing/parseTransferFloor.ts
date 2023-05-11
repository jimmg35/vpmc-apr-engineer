import { IDeal } from '../../../schema/deal'
import { toInteger } from 'chinese-numbers-to-arabic'
import { Status } from '../../../schema/status'
import { trimSpace, countOccurence } from '../../../utility'

const parseTransferFloor = (row: IDeal) => {
  const value = trimSpace(row.transferFloor)
  if (
    value === ''
  ) {
    row.parsedValue.transferFloor = {
      value: undefined,
      status: Status.semanticError
    }
    return
  }

  const convertedFloors: number[] = []
  const floors = value.split("，")
  for (let i = 0; i < floors.length; i++) {
    const floor = floors[i]
    if (floor.indexOf('層') === -1) continue
    if (floor === '夾層') {
      convertedFloors.push(0)
      continue
    }
    if (floor.indexOf('地下') !== -1) {
      if (floor === '地下層') continue
      // console.log(`${-toInteger(floor)} ${floor}`)
      convertedFloors.push(-toInteger(floor))
      continue
    }
    convertedFloors.push(toInteger(floor))
  }

  try {
    row.parsedValue.transferFloor = {
      value: convertedFloors,//toInteger(value),
      status: Status.success
    }
  } catch {
    row.parsedValue.transferFloor = {
      value: undefined,
      status: Status.parseError
    }
  }
}

export default parseTransferFloor

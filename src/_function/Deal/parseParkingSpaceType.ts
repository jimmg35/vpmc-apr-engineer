import { IDeal } from '../../schema/Deal'
import { Status } from '../../schema/Status'
import { trimSpace } from '../../utility'

export enum parkingSpaceType {
  none = 0,
  tower = 1,       // 塔式車位
  rampPlane = 2,   // 坡道平面
  liftPlane = 3,   // 升降平面
  liftMachine = 4, // 升降機械
  rampMachine = 5, // 坡道機械
  groundPlane = 6, // 一樓平面
  other = 7
}

const parseParkingSpaceType = (row: IDeal) => {
  const value = trimSpace(row.parkingSpaceType)
  if (value === '') {
    row.parsedValue.parkingSpaceType = {
      value: parkingSpaceType.none,
      status: Status.success
    }
  } else if (value === '塔式車位') {
    row.parsedValue.parkingSpaceType = {
      value: parkingSpaceType.tower,
      status: Status.success
    }
  } else if (value === '坡道平面') {
    row.parsedValue.parkingSpaceType = {
      value: parkingSpaceType.rampPlane,
      status: Status.success
    }
  } else if (value === '升降平面') {
    row.parsedValue.parkingSpaceType = {
      value: parkingSpaceType.liftPlane,
      status: Status.success
    }
  } else if (value === '升降機械') {
    row.parsedValue.parkingSpaceType = {
      value: parkingSpaceType.liftMachine,
      status: Status.success
    }
  } else if (value === '坡道機械') {
    row.parsedValue.parkingSpaceType = {
      value: parkingSpaceType.rampMachine,
      status: Status.success
    }
  } else if (value === '一樓平面') {
    row.parsedValue.parkingSpaceType = {
      value: parkingSpaceType.groundPlane,
      status: Status.success
    }
  } else if (value === '其他') {
    row.parsedValue.parkingSpaceType = {
      value: parkingSpaceType.other,
      status: Status.success
    }
  } else {
    row.parsedValue.parkingSpaceType = {
      value: undefined,
      status: Status.semanticError
    }
  }
}

export default parseParkingSpaceType

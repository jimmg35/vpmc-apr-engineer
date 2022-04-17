
interface IParsedValue<T> {
  value?: T
  success?: boolean
}

export interface IDeal {
  town: string
  transactionTarget: string
  address: string
  landTransferArea: string
  urbanLandUse: string
  nonUrbanLandUse: string
  nonUrbanLandUsePlanning: string
  transactionTime: string
  transactionAmount: string
  transferFloor: string
  floor: string
  buildingType: string
  usage: string
  buildingMaterial: string
  completionTime: string
  buildingTransferArea: string
  roomNumber: string
  hallNumber: string
  bathNumber: string
  hasCompartment: string
  hasCommittee: string
  price: string
  unitPrice: string
  parkingSpaceType: string
  parkingSpaceTransferArea: string
  parkingSpacePrice: string
  coordinate_y: string
  coordinate_x: string
  hasNotes: string
  notes: string
  id: string
  buildingArea: string
  subBuildingArea: string
  belconyArea: string
  hasElevator: string
  parsedValue: {
    transactionTime?: IParsedValue<Date | undefined>
    completionTime?: IParsedValue<Date | undefined>
    floor?: IParsedValue<number | undefined>
    transferFloor?: IParsedValue<number | undefined>
    hasElevator?: IParsedValue<number | undefined>
    hasCommittee?: IParsedValue<number | undefined>
  }
}

export const hasElevatorSchema = {
  0: '無電梯',
  1: '有電梯',
  2: '不確定'
}

export const hasCommitteeSchema = {
  0: '無管委會',
  1: '有管委會',
  2: '不確定'
}

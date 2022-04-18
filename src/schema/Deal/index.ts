import { Status } from '../Status'

interface IParsedValue<T> {
  value?: T
  status?: Status
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
    hasCompartment?: IParsedValue<number | undefined>

    landTransferArea?: IParsedValue<number | undefined>
    buildingTransferArea?: IParsedValue<number | undefined>
    roomNumber?: IParsedValue<number | undefined>
    hallNumber?: IParsedValue<number | undefined>
    bathNumber?: IParsedValue<number | undefined>
    price?: IParsedValue<number | undefined>
    unitPrice?: IParsedValue<number | undefined>
    parkingSpaceTransferArea?: IParsedValue<number | undefined>
    parkingSpacePrice?: IParsedValue<number | undefined>
    buildingArea?: IParsedValue<number | undefined>
    subBuildingArea?: IParsedValue<number | undefined>
    belconyArea?: IParsedValue<number | undefined>
  }
}

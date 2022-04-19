import { Status } from '../Status'

interface IParsedValue<T> {
  value?: T
  status?: Status
}

export interface IDeal {
  town: string                      // Deprecate
  transactionTarget: string         // Deprecate
  address: string                   // Deprecate
  landTransferArea: string          // Done
  urbanLandUse: string              // Done
  nonUrbanLandUse: string           // Done
  nonUrbanLandUsePlanning: string   // Done
  transactionTime: string           // Done
  transactionAmount: string         // Done
  transferFloor: string             // Done
  floor: string                     // Done
  buildingType: string              // Done
  usage: string                     // Deprecate
  buildingMaterial: string          // Deprecate
  completionTime: string            // Done
  buildingTransferArea: string      // Done
  roomNumber: string                // Done
  hallNumber: string                // Done
  bathNumber: string                // Done
  hasCompartment: string            // Done
  hasCommittee: string              // Done
  price: string                     // Done
  unitPrice: string                 // Done
  parkingSpaceType: string
  parkingSpaceTransferArea: string  // Done
  parkingSpacePrice: string         // Done
  coordinate_y: string              // Done
  coordinate_x: string              // Done
  hasNotes: string                  // Deprecate
  notes: string
  id: string                        // Done
  buildingArea: string              // Done
  subBuildingArea: string           // Done
  belconyArea: string               // Done
  hasElevator: string               // Done
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
    id?: IParsedValue<string | undefined>
    buildingArea?: IParsedValue<number | undefined>
    subBuildingArea?: IParsedValue<number | undefined>
    belconyArea?: IParsedValue<number | undefined>
    landAmount?: IParsedValue<number | undefined>
    buildingAmount?: IParsedValue<number | undefined>
    parkAmount?: IParsedValue<number | undefined>

    urbanLandUse?: IParsedValue<number | undefined>
    nonUrbanLandUse?: IParsedValue<number | undefined>
    nonUrbanLandUsePlanning?: IParsedValue<number | undefined>
    buildingType?: IParsedValue<number | undefined>
    parkingSpaceType?: IParsedValue<number | undefined>
  }
}

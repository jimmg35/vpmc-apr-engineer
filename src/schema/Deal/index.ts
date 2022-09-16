import { Status } from '../status'

interface IParsedValue<T> {
  value?: T
  status?: Status
}

export interface IDeal {
  town: string                      // 鄉鎮市區(Deprecate)
  transactionTarget: string         // 交易標的(Deprecate)
  address: string                   // 土地位置/建物門牌(Deprecate)
  landTransferArea: string          // 土地移轉總面積(平方公尺)
  urbanLandUse: string              // 都市土地使用分區
  nonUrbanLandUse: string           // 非都市土地使用分區
  nonUrbanLandUsePlanning: string   // 非都市土地使用編定
  transactionTime: string           // 交易年月日
  transactionAmount: string         // 交易筆棟數
  transferFloor: string             // 移轉層次
  floor: string                     // 總樓層數
  buildingType: string              // 建物型態
  usage: string                     // 主要用途(Deprecate)
  buildingMaterial: string          // 主要建材(Deprecate)
  completionTime: string            // 建築完成年月
  buildingTransferArea: string      // 建物移轉總面積(平方公尺)
  roomNumber: string                // 建物現況格局-房
  hallNumber: string                // 建物現況格局-廳
  bathNumber: string                // 建物現況格局-衛
  hasCompartment: string            // 建物現況格局-隔間
  hasCommittee: string              // 有無管理組織
  price: string                     // 總價(元)
  unitPrice: string                 // 單價(元/平方公尺)
  parkingSpaceType: string          // 車位類別
  parkingSpaceTransferArea: string  // 車位移轉總面積(平方公尺)
  parkingSpacePrice: string         // 車位總價(元)
  coordinate_y: string              // 交易標的橫坐標
  coordinate_x: string              // 交易標的縱坐標
  hasNotes: string                  // 有無備註欄(Y/N) (Deprecate)
  notes: string                     // 備註
  id: string                        // 編號
  buildingArea: string              // 主建物面積
  subBuildingArea: string           // 附屬建物面積
  belconyArea: string               // 陽台面積
  hasElevator: string               // 電梯
  parsedValue: {
    transactionTime?: IParsedValue<string | undefined>
    completionTime?: IParsedValue<string | undefined>
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
  logicalExamine: {
    note: boolean
    buildingType: boolean
    transferFloor: boolean
  }
  calculatedPrice: {
    priceWithoutParking: number
    price: number
  }
}
// RPUNMLLMQHHFFBA67CA
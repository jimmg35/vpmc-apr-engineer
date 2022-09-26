
export enum buildingType {
  apartmentComplex = 0, // 住宅大樓(11層含以上有電梯)
  officeBuilding = 1,   // 辦公商業大樓
  other = 2,            // 其他
  flat = 3,             // 公寓(5樓含以下無電梯)
  apartment = 4,        // 華廈(10層含以下有電梯)
  suite = 5,              // 套房(1房1廳1衛)
  townhouse = 6,        // 透天厝
  store = 7,            // 店面(店鋪)
  factoryOffice = 8,     // 廠辦
  warehouse = 9,        // 倉庫
  factory = 10,         // 工廠
  farmhouse = 11        // 農舍
}

export enum hasCommittee {
  false = 0,
  true = 1,
  uncertain = 2
}

export enum hasCompartment {
  false = 0,
  true = 1,
  uncertain = 2
}

export enum nonUrbanLandUse {
  none = 0,
  resident = 1,
  special = 2
}

export enum hasElevator {
  false = 0,
  true = 1,
  uncertain = 2
}

export enum nonUrbanLandUsePlanning {
  none = 0
}

export enum urbanLandUse {
  resident = 0,
  business = 1,
  other = 2,
  none = 3,
  industry = 4,
  agriculture = 5
}

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

export enum landTransferStatusType {
  partial = 0,
  entire = 1,
  none = 3
}

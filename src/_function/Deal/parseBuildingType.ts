import { IDeal } from '../../schema/Deal'
import { Status } from '../../schema/Status'
import { trimSpace } from '../../utility'
import { buildingType } from '../../schema/enum'

const parseBuildingType = (row: IDeal) => {
  const value = trimSpace(row.buildingType)
  if (value === '住宅大樓(11層含以上有電梯)') {
    row.parsedValue.buildingType = {
      value: buildingType.apartmentComplex,
      status: Status.success
    }
  } else if (value === '辦公商業大樓') {
    row.parsedValue.buildingType = {
      value: buildingType.officeBuilding,
      status: Status.success
    }
  } else if (value === '其他') {
    row.parsedValue.buildingType = {
      value: buildingType.other,
      status: Status.success
    }
  } else if (value === '公寓(5樓含以下無電梯)') {
    row.parsedValue.buildingType = {
      value: buildingType.flat,
      status: Status.success
    }
  } else if (value === '華廈(10層含以下有電梯)') {
    row.parsedValue.buildingType = {
      value: buildingType.apartment,
      status: Status.success
    }
  } else if (value === '套房(1房1廳1衛)') {
    row.parsedValue.buildingType = {
      value: buildingType.suite,
      status: Status.success
    }
  } else if (value === '透天厝') {
    row.parsedValue.buildingType = {
      value: buildingType.townhouse,
      status: Status.success
    }
  } else if (value === '店面(店鋪)') {
    row.parsedValue.buildingType = {
      value: buildingType.store,
      status: Status.success
    }
  } else if (value === '廠辦') {
    row.parsedValue.buildingType = {
      value: buildingType.factoryOffice,
      status: Status.success
    }
  } else if (value === '倉庫') {
    row.parsedValue.buildingType = {
      value: buildingType.warehouse,
      status: Status.success
    }
  } else if (value === '工廠') {
    row.parsedValue.buildingType = {
      value: buildingType.factory,
      status: Status.success
    }
  } else if (value === '農舍') {
    row.parsedValue.buildingType = {
      value: buildingType.farmhouse,
      status: Status.success
    }
  } else {
    row.parsedValue.buildingType = {
      value: undefined,
      status: Status.semanticError
    }
  }
}

export default parseBuildingType

import { ILand } from '../../../schema/deal'
import { Status } from '../../../schema/status'
import { trimSpace } from '../../../utility'
import { landTransferStatusType } from '../../deal/enum'

const parseLandTransferStatus = (row: ILand) => {
  const value = trimSpace(row.transferStatus)
  if (value === '持分移轉') {
    row.parsedValue.transferStatus = {
      value: landTransferStatusType.partial,
      status: Status.success
    }
  } else if (value === '全筆移轉') {
    row.parsedValue.transferStatus = {
      value: landTransferStatusType.entire,
      status: Status.success
    }
  } else if (value === '') {
    row.parsedValue.transferStatus = {
      value: landTransferStatusType.none,
      status: Status.success
    }
  }
}

export default parseLandTransferStatus

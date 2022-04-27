import { IDeal } from '../../../schema/deal'
import { Status } from '../../../schema/status'

const parseTransactionAmount = (row: IDeal) => {
  const anchorA = row.transactionAmount.indexOf('土地')
  const anchorB = row.transactionAmount.indexOf('建物')
  const anchorC = row.transactionAmount.indexOf('車位')
  const landAmount = row.transactionAmount.substring(anchorA + 2, anchorB)
  const buildingAmount = row.transactionAmount.substring(anchorB + 2, anchorC)
  const parkAmount = row.transactionAmount.substring(anchorC + 2, anchorC + 3)
  row.parsedValue.landAmount = {
    value: Number(landAmount),
    status: Status.success
  }
  row.parsedValue.buildingAmount = {
    value: Number(buildingAmount),
    status: Status.success
  }
  row.parsedValue.parkAmount = {
    value: Number(parkAmount),
    status: Status.success
  }
}

export default parseTransactionAmount

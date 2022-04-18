import { IDeal } from '../../schema/Deal'
import { Status } from '../../schema/Status'

const parseTransactionTime = (row: IDeal) => {
  if (row.transactionTime === '') {
    row.parsedValue.transactionTime = {
      value: undefined,
      status: Status.semanticError
    }
    return
  }
  let year = String(
    Number(
      row.transactionTime.substring(
        0, row.transactionTime.length - 4
      )
    ) + 1911
  )
  let date = row.transactionTime.substring(
    row.transactionTime.length - 4,
    row.transactionTime.length
  )
  try {
    const datetime = new Date(year + '-' + date.substring(0, 2) + '-' + date.substring(2, 4))
    let iso = datetime.toISOString()
    row.parsedValue.transactionTime = {
      value: datetime,
      status: Status.success
    }
  } catch {
    row.parsedValue.transactionTime = {
      value: undefined,
      status: Status.parseError
    }
  }
}

export default parseTransactionTime

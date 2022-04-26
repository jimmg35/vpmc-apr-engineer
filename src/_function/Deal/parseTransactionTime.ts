import { IDeal } from '../../schema/deal'
import { Status } from '../../schema/status'
import { trimSpace } from '../../utility'

const parseTransactionTime = (row: IDeal) => {
  const value = trimSpace(row.transactionTime)
  if (value === '') {
    row.parsedValue.transactionTime = {
      value: undefined,
      status: Status.semanticError
    }
    return
  }
  let year = String(
    Number(
      value.substring(
        0, value.length - 4
      )
    ) + 1911
  )
  let date = value.substring(
    value.length - 4,
    value.length
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

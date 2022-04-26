import { IDeal } from '../../schema/deal'
import { Status } from '../../schema/status'
import { trimSpace } from '../../utility'

const parseCompletionTime = (row: IDeal) => {
  const value = trimSpace(row.completionTime)
  if (value === '') {
    row.parsedValue.completionTime = {
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
    row.parsedValue.completionTime = {
      value: datetime,
      status: Status.success
    }
  } catch {
    row.parsedValue.completionTime = {
      value: undefined,
      status: Status.parseError
    }
  }
}

export default parseCompletionTime

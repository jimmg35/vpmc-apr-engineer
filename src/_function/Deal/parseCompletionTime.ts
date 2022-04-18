import { IDeal } from '../../schema/Deal'
import { Status } from '../../schema/Status'

const parseCompletionTime = (row: IDeal) => {
  if (row.completionTime === '') {
    row.parsedValue.completionTime = {
      value: undefined,
      status: Status.semanticError
    }
    return
  }
  let year = String(
    Number(
      row.completionTime.substring(
        0, row.completionTime.length - 4
      )
    ) + 1911
  )
  let date = row.completionTime.substring(
    row.completionTime.length - 4,
    row.completionTime.length
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

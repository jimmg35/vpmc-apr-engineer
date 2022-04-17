import { IDeal } from '../../schema/Deal'

const parseCompletionTime = (row: IDeal) => {
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
      success: true
    }
  } catch {
    row.parsedValue.completionTime = {
      value: undefined,
      success: false
    }
  }
}

export default parseCompletionTime

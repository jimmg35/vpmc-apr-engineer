import { IDeal } from "../../schema/Deal"

const parseTransactionTime = (row: IDeal) => {
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
    row.parsedValue.transactionTime = datetime
  } catch {
    row.parsedValue.transactionTime = undefined
  }
}

export default parseTransactionTime

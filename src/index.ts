import { readCsvFile } from './io'
import { IDeal } from './schema/Deal'
import './_function/index'
import { toInteger } from 'chinese-numbers-to-arabic'

(async () => {
  const deals = await readCsvFile<IDeal>('./repository/taipei/merged/taipei.csv')
  // deals
  //   .showTop()
  //   .parseTransactionTime()
  //   .parseCompletionTime()
  //   .parseFloor()
  //   .parseTransferFloor()
  //   .parseElevator()
  //   .parseCommittee()
  //   .parseCompartment()
  //   .parseNumerical()
  //   .parseTransactionAmount()
  //   .parseId()
  //   .showTop()

  const aa: any[] = []
  deals.map((deal) => {
    if (!aa.includes(deal.urbanLandUse)) {
      aa.push(deal.urbanLandUse)
    }
  })
  console.log(aa)

})()

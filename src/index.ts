import { readCsvFile } from './io'
import { IDeal } from './schema/Deal'
import './_function/index'
import { toInteger } from 'chinese-numbers-to-arabic'


(async () => {
  // console.log(toInteger('一層，二層，地下一層，三層，見其他登記事項'))
  const deals = await readCsvFile<IDeal>('./repository/taipei/merged/taipei.csv')
  deals
    .showTop()
    .parseTransactionTime()
    .parseCompletionTime()
    .parseFloor()
    .parseTransferFloor()
    .parseElevator()
    .parseCommittee()
    .parseCompartment()
    .parseNumerical()
    .showTop()

  // const aa: any[] = []
  // deals.map((deal) => {
  //   if (!aa.includes(deal.hasCompartment)) {
  //     aa.push(deal.hasCompartment)
  //   }
  // })
  // console.log(aa)

})()

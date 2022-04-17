import { readCsvFile } from './io'
import { IDeal } from './schema/Deal'
import './_function/index'


(async () => {
  const deals = await readCsvFile<IDeal>('./repository/taipei/merged/taipei.csv')
  deals
    .showTop()
    // .parseTransactionTime()
    // .parseCompletionTime()
    // .parseFloor()
    // .parseTransferFloor()
    // .parseElevator()
    .parseCommittee()
    .showTop()

  // const aa: any[] = []
  // deals.map((deal) => {
  //   if (!aa.includes(deal.hasCompartment)) {
  //     aa.push(deal.hasCompartment)
  //   }
  // })
  // console.log(aa)

})()

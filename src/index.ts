import { readCsvFile } from './io'
import { IDeal } from './schema/Deal'
import './_function/index'


(async () => {
  const deals = await readCsvFile<IDeal>('./repository/taipei/merged/taipei.csv')
  deals
    .showTop()
    .parseTransactionTime()
    .showTop()
})()

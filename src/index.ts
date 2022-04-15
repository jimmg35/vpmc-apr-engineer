import { readCsvFile } from './io'
import { IDeal } from './schema/Deal'
import { chain } from 'lodash'

(async () => {
  const data = await readCsvFile<IDeal>('./repository/taipei/merged/taipei.csv')
  console.log(data[0])
})()

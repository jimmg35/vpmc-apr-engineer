import { readCsvFile } from './io'
import { IDeal } from './schema/Deal'
import { chain, mapKeys } from 'lodash'
import { langMapping } from './schema/LanguageMapping'

(async () => {
  const data = await readCsvFile<IDeal>('./repository/taipei/merged/taipei.csv')
  console.log(data[0])
  // let aa = mapKeys(data[0], (value, key) => {
  //   // if (langMapping[key] === undefined) {
  //   //   return 'fuck'
  //   // }
  //   return langMapping[key]
  // })
  // console.log(aa)
})()

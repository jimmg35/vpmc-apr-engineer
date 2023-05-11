// import './_function/index'
// import './_function/index'
import fs from 'fs'
import { landLangMapping, dealLangMapping, buildLangMapping, parkLangMapping } from './schema/languageMapping'
import { processParks, processBuilds, processDeals, processLands } from './subProcesses'
import { IBuild, IDeal, ILand, IPark } from './schema/deal'
import { readCsvFileApr } from './io'

(async () => {

  const sheetType = process.argv[2]
  const county = process.argv[3]
  const filePath = `./repository/${county}/merged/${sheetType}.csv`

  if (sheetType === 'park') {
    const parks = fs.existsSync(filePath)
      ? await readCsvFileApr<IPark>(filePath, parkLangMapping)
      : []
    processParks(parks, county)
  }

  if (sheetType === 'build') {
    const builds = fs.existsSync(filePath)
      ? await readCsvFileApr<IBuild>(filePath, buildLangMapping)
      : []
    processBuilds(builds, county)
  }

  if (sheetType === 'land') {
    const lands = fs.existsSync(filePath)
      ? await readCsvFileApr<ILand>(filePath, landLangMapping)
      : []
    processLands(lands, county)
  }

  if (sheetType === 'deal') {
    const deals = fs.existsSync(filePath)
      ? await readCsvFileApr<IDeal>(filePath, dealLangMapping)
      : []
    processDeals(deals, county)
  }

  console.log(`[${county}] - [${sheetType}] | DONE`)

})()

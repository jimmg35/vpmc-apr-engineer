import { readCsvFile } from './io'
import { IDeal } from './schema/deal'
import './_function/index'
import { toInteger } from 'chinese-numbers-to-arabic'

(async () => {

  // 讀取檔案
  const deals = await readCsvFile<IDeal>('./repository/taipei/merged/taipei.csv')

  // 進行資料parsing
  deals
    .parseTransactionTime()
    .parseCompletionTime()
    .parseFloor()
    .parseTransferFloor()
    .parseElevator()
    .parseCommittee()
    .parseCompartment()
    .parseNumerical()
    .parseTransactionAmount()
    .parseId()
    .parseUrbanLandUse()
    .parseNonUrbanLandUse()
    .parseNonUrbanLandUsePlanning()
    .parseBuildingType()
    .parseParkingSpaceType()

  // 進行parsing結果檢查
  deals.examineParsingResult()

})()

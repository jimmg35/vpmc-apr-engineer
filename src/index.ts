import { readCsvFile } from './io'
import { IDeal } from './schema/deal'
import './_function/index'
// import examineParsingResult from './_function/deal/examine/examineParsingResult'

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
  const { parseSuccessCases, parseFailCases } = deals.examineParsingResult()
  console.log(`解析成功案例數量 : ${parseSuccessCases.length}`)
  console.log(`解析失敗案例數量 : ${parseFailCases.length}`)


})()

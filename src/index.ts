import { readCsvFile } from './io'
import { IDeal } from './schema/deal'
import './_function/index'
// import classifyParsingResult from './_function/deal/examine/classifyParsingResult'

(async () => {

  // 讀取檔案
  const deals = await readCsvFile<IDeal>('./repository/taipei/merged/taipei.csv')

  // 進行資料parsing (Phase 2)
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

  // 進行解析結果檢查分類 (Phase 3)
  const { parseSuccessCases, parseFailCases } = deals.classifyParsingResult()
  console.log(`解析成功案例數量 : ${parseSuccessCases.length}`)
  console.log(`解析失敗案例數量 : ${parseFailCases.length}`)
  console.log('==========================================')

  // 進行解析成功案例的邏輯檢查 (Phase 4)
  parseSuccessCases
    .examineNotes()
    .examineBuildingType()
    .examineTransferFloor()

  // 進行邏輯檢查結果分類 (Phase 5)
  const { examineSuccessCases, examineFailCases } = parseSuccessCases.classifyLogicalResult()
  console.log(`邏輯檢核成功案例數量 : ${examineSuccessCases.length}`)
  console.log(`邏輯檢核失敗案例數量 : ${examineFailCases.length}`)
  console.log('==========================================')

  // 進行總價與車位價計算與檢核 (Phase 5)


})()

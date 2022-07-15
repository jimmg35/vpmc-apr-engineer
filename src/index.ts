import { readCsvFileApr } from './io'
import { IDeal } from './schema/deal'
import './_function/index'
import fs from 'fs'
import path from 'path'
// import classifyParsingResult from './_function/deal/examine/classifyParsingResult'

(async () => {

  const counties = fs.readdirSync(
    path.resolve(__dirname, '../repository')
  )

  for (let i = 0; i < counties.length; i++) {
    const county = counties[i]
    const twd97tm2 = 'PROJCS["TWD97TM2",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",250000.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",121.0],PARAMETER["Scale_Factor",0.9999],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]'
    const twd97tm2_119 = 'PROJCS["TWD97TM2-119",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",250000.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",119.0],PARAMETER["Scale_Factor",0.9999],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]'

    // 讀取檔案
    const deals = await readCsvFileApr<IDeal>(`./repository/${county}/merged/${county}.csv`)

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

    // 分類出建物交易紀錄(phase 6)
    const { dealCases } = examineSuccessCases.classifyTransactionItem()
    console.log(`建物交易案例數量 : ${dealCases.length}`)

    // 進行總價與車位價計算與檢核 (Phase 7)
    dealCases.examineTotalPrice()
    const { nonNullCases } = dealCases.classifyNullRecord()
    console.log(`去除空值案例數量 : ${nonNullCases.length}`)

    // 輸出csv檔
    // parseFailCases
    // examineFailCases
    nonNullCases.exportCsvFile(
      `./apr-output/${county}.csv`,
      ['kinmen', 'lianjiang', 'penghu'].includes(county)
        ? twd97tm2_119
        : twd97tm2
    )
  }

})()

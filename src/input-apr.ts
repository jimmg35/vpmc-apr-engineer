import { readCsvFile } from './io'
import { Deal, IApr } from './entity/Apr'
import { Land, IAprLand } from './entity/AprLand'
import { Build, IAprBuild } from './entity/AprBuild'
import { Park, IAprPark } from './entity/AprPark'
import { Commitee, ICommitee } from './entity/Commitee'
import { createConnection } from 'typeorm'
import { ILicense, License } from './entity/License'
import fs from 'fs'
import path from 'path'
import { ILand } from './schema/deal'
import format from 'string-format'
import { EntityTarget } from 'typeorm'

// 輸入順序
// deal => land => build => park

const isNull = (value: any) => {
  if (value === 'NULL') return true
  return false
}

const parseLicenseDate = (value: string) => {
  const dateArray = value.replace('年', '/').replace('月', '/').replace('日', '/').split('/')
  return Number(dateArray[0]) + 1911 + '/' + Number(dateArray[1]) + '/' + Number(dateArray[2])
}

interface IAprFileGeneric extends IApr, IAprLand, IAprBuild, IAprPark { }

type SheetType = 'land' | 'build' | 'park' | 'deal' | 'transferFloor'

interface IImportInfo {
  county: string
  sheetType: SheetType
}

(async () => {

  const county = process.argv[3]
  const sheetType = process.argv[2]
  const counties = [
    'changhua',
    'chiayi',
    'chiayi_city',
    'hsinchu',
    'hsinchu_city',
    'hualien',
    'kaohsiung',
    'keelung',
    'kinmen',
    'lianjiang',
    'miaoli',
    'nantou',
    'penghu',
    'pingtung',
    'tainan',
    'yilan',
    'taitung',
    'yunlin',
    'taipei',
    'taoyuan',
    'newtaipei',
    'taichung'
  ]
  if (!counties.includes(county)) return

  // 新增db connection
  const connection = await createConnection()

  const importDataBySheetType = async <FT extends IAprFileGeneric, DT> ({
    county,
    sheetType
  }: IImportInfo, entityType: EntityTarget<Land>) => {

    let filePath = `./apr-output/${county}-${sheetType}.csv`
    if (sheetType === 'transferFloor') {
      filePath = `./apr-output/${county}-deal-TF.csv`
    }
    const aprs = await readCsvFile<FT>(filePath)
    const repository = connection.getRepository(entityType)
    const totalLength = aprs.length
    aprs.forEach(async (apr, index) => {

      let insertString = ``
      if (sheetType === 'deal') {
        // console.log(apr)
        const addressString = isNull(apr.address) ? "NULL" : `'${apr.address}'`
        const transactionString = isNull(apr.transactionTime) ? "NULL" : `'${apr.transactionTime}'`
        const completionString = isNull(apr.completionTime) ? "NULL" : `'${apr.completionTime}'`

        const urbanLandUseString = apr.urbanLandUse === 'NULL' ? "NULL" : `'${apr.urbanLandUse}'`
        const nonUrbanLandUseString = apr.nonUrbanLandUse === 'NULL' ? "NULL" : `'${apr.nonUrbanLandUse}'`
        const nonUrbanLandUsePlanningString = apr.nonUrbanLandUsePlanning === 'NULL' ? "NULL" : `'${apr.nonUrbanLandUsePlanning}'`
        const usageString = apr.usage === 'NULL' ? "NULL" : `'${apr.usage}'`
        const transferFloorRawString = apr.transferFloorRaw === 'NULL' ? "NULL" : `'${apr.transferFloorRaw}'`


        const price = apr.price.toString() === '' ? "NULL" : `${apr.price}`

        const priceWithoutParking = apr.priceWithoutParking.toString() === '' ? "NULL" : `${apr.priceWithoutParking}`


        insertString = `INSERT INTO deal ("town_raw","transactionTarget_raw","address_raw","landTransferArea_raw","urbanLandUse_raw","nonUrbanLandUse_raw","nonUrbanLandUsePlanning_raw","transactionTime_raw","transactionAmount_raw","transferFloor_raw","floor_raw","buildingType_raw","usage_raw","buildingMaterial_raw","completionTime_raw","buildingTransferArea_raw","roomNumber_raw","hallNumber_raw","bathNumber_raw","hasCompartment_raw","hasCommittee_raw","price_raw","unitPrice_raw","parkingSpaceType_raw","parkingSpaceTransferArea_raw","parkingSpacePrice_raw","hasNotes_raw","notes_raw","id_raw","buildingArea_raw","subBuildingArea_raw","belconyArea_raw","hasElevator_raw", "aprId", "address", "transactionTime", "completionTime", floor, "hasElevator", "hasCommittee", "hasCompartment", "buildingTransferArea", price, "unitPrice", "parkingSpaceTransferArea", "parkingSpacePrice", "landTransferArea", "roomNumber", "hallNumber", "bathNumber", "buildingArea", "subBuildingArea", "belconyArea", "landAmount", "buildingAmount", "parkAmount", "urbanLandUse", "nonUrbanLandUse", "nonUrbanLandUsePlanning", "usage", "transferFloorRaw", "buildingType", "parkingSpaceType", "priceWithoutParking", coordinate) VALUES ( '${apr.town_raw}','${apr.transactionTarget_raw}','${apr.address_raw}','${apr.landTransferArea_raw}','${apr.urbanLandUse_raw}','${apr.nonUrbanLandUse_raw}','${apr.nonUrbanLandUsePlanning_raw}','${apr.transactionTime_raw}','${apr.transactionAmount_raw}','${apr.transferFloor_raw}','${apr.floor_raw}','${apr.buildingType_raw}','${apr.usage_raw}','${apr.buildingMaterial_raw}','${apr.completionTime_raw}','${apr.buildingTransferArea_raw}','${apr.roomNumber_raw}','${apr.hallNumber_raw}','${apr.bathNumber_raw}','${apr.hasCompartment_raw}','${apr.hasCommittee_raw}','${apr.price_raw}','${apr.unitPrice_raw}','${apr.parkingSpaceType_raw}','${apr.parkingSpaceTransferArea_raw}','${apr.parkingSpacePrice_raw}','${apr.hasNotes_raw}','${apr.notes_raw}','${apr.id_raw}','${apr.buildingArea_raw}','${apr.subBuildingArea_raw}','${apr.belconyArea_raw}', '${apr.hasElevator_raw}', '${apr.id}', ${addressString} , ${transactionString}, ${completionString}, ${apr.floor}, ${apr.hasElevator}, ${apr.hasCommittee}, ${apr.hasCompartment}, ${apr.buildingTransferArea}, ${price}, ${apr.unitPrice}, ${apr.parkingSpaceTransferArea}, ${apr.parkingSpacePrice}, ${apr.landTransferArea}, ${apr.roomNumber}, ${apr.hallNumber}, ${apr.bathNumber}, ${apr.buildingArea}, ${apr.subBuildingArea}, ${apr.belconyArea}, ${apr.landAmount}, ${apr.buildingAmount}, ${apr.parkAmount}, ${urbanLandUseString}, ${nonUrbanLandUseString}, ${nonUrbanLandUsePlanningString}, ${usageString}, ${transferFloorRawString}, ${apr.buildingType}, ${apr.parkingSpaceType}, ${priceWithoutParking}, 'SRID=4326;POINT(${apr.coordinate_x} ${apr.coordinate_y})');`
      }
      if (sheetType === 'land') {
        insertString = `INSERT INTO land ("aprId", "landTransferArea", "rightDenumerate", "rightNumerate", address, "landUse", "parcelNumber", "transferStatus") VALUES ('${apr.id}', ${apr.landTransferArea}, ${apr.rightDenumerate}, ${apr.rightNumerate}, '${apr.address}', '${apr.landUse}', '${apr.parcelNumber}', ${apr.transferStatus});`
      }
      if (sheetType === 'build') {
        insertString = `INSERT INTO build ("aprId", "usage", "material", "buildingLayer", "buildingTransferArea") VALUES ('${apr.id}', '${apr.usage}', '${apr.material}', '${apr.buildingLayer}', ${apr.buildingTransferArea});`
      }
      if (sheetType === 'park') {
        insertString = `INSERT INTO park ("aprId", "locateLevel", "parkingSpaceType", "parkingSpacePrice", "parkingSpaceTransferArea") VALUES ('${apr.id}', ${apr.locateLevel === '' ? 'null' : apr.locateLevel}, ${apr.parkingSpaceType}, ${apr.parkingSpacePrice}, ${apr.parkingSpaceTransferArea});`
      }
      if (sheetType === 'transferFloor') {
        insertString = `INSERT INTO transferfloor ("aprId", "floor") VALUES ('${apr.id}', ${apr.floor});`
      }
      try {
        await repository.query(insertString)
        console.log(`${apr.id} ${county} input! | ${index} / ${totalLength}`)
      } catch (err) {
        console.log(err)
        console.log(insertString)
      }
    })
  }

  // 讀取實價登陸資料
  await importDataBySheetType({
    county: county,
    sheetType: sheetType as SheetType
  }, Land)



  // 讀取管委會資料
  // const commitees = await readCsvFile<ICommitee>('./db-input-data/license_geocoded_clip.csv')

  // 輸入管委會資料
  // const commitee_repository = await connection.getRepository(Commitee)
  // commitees.forEach(async (commitee) => {
  //   const queryString = `INSERT INTO commitee (date, organization, address, license, "licenseYear", "licenseCode", coordinate) VALUES ('${commitee.date}', '${commitee.organization}', '${commitee.address}', '${commitee.license}', '${commitee.licenseYear}', '${commitee.licenseCode}', 'SRID=4326;POINT(${commitee.longitude} ${commitee.latitude})');`
  //   await commitee_repository.query(queryString)
  // })



  // // 讀取新北市使用執照資料
  // const licenses = await readCsvFile<ILicense>('./db-input-data/newtaipei-license.csv')
  // const license_repository = await connection.getRepository(License)
  // licenses.forEach(async (license, index) => {
  //   // if (index < 3) {
  //   // console.log(Number(license.licenseCode))

  //   const queryString = `INSERT INTO license 
  //       (license, "licenseType", "licenseYear", "licenseCode", "baseArea", "buildingArea", "floorArea",
  //       "buildingHeight", "basementArea", "blankArea", "buildingStructure", "groundLevel",
  //       "undergroundLevel", "buildingCount", "householdCount", representative, designer,
  //       supervisor,builder,"parkingSpace","issueDate","startDate","endDate")
  //       VALUES
  //       ('${license.license}', '${license.licenseType}', '${license.licenseYear}', '${Number(license.licenseCode)}', ${license.baseArea}, ${license.buildingArea}, ${license.floorArea},
  //       ${license.buildingHeight}, ${license.basementArea}, ${license.blankArea}, '${license.buildingStructure}', ${license.groundLevel},
  //       ${license.undergroundLevel}, ${license.buildingCount}, ${license.householdCount}, 
  //       ${license.representative === 'nan' ? "NULL" : "'" + license.representative + "'"},
  //       ${license.designer === 'nan' ? "NULL" : "'" + license.designer + "'"},
  //       ${license.supervisor === 'nan' ? "NULL" : "'" + license.supervisor + "'"}, 
  //       ${license.builder === 'nan' ? "NULL" : "'" + license.builder + "'"},
  //       ${license.parkingSpace === 'nan' ? "NULL" : "'" + license.parkingSpace + "'"},
  //       ${license.issueDate === 'nan' ? "NULL" : "'" + parseLicenseDate(license.issueDate!) + "'"},
  //       ${license.startDate === 'nan' ? "NULL" : "'" + parseLicenseDate(license.startDate!) + "'"},
  //       ${license.endDate === 'nan' ? "NULL" : "'" + parseLicenseDate(license.endDate!) + "'"}
  //       );`
  //   await license_repository.query(queryString)
  //   console.log(license.license)
  //   // }
  // })
})()

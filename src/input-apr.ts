import { readCsvFile } from './io'
import { Apr, IApr } from './entity/Apr'
import { AprLand, IAprLand } from './entity/AprLand'
import { AprBuild, IAprBuild } from './entity/AprBuild'
import { AprPark, IAprPark } from './entity/AprPark'
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

const parseLicenseDate = (value: string) => {
  const dateArray = value.replace('年', '/').replace('月', '/').replace('日', '/').split('/')
  return Number(dateArray[0]) + 1911 + '/' + Number(dateArray[1]) + '/' + Number(dateArray[2])
}

interface IAprFileGeneric extends IApr, IAprLand, IAprBuild, IAprPark { }

type SheetType = 'land' | 'build' | 'park' | 'deal'

interface IImportInfo {
  county: string
  sheetType: SheetType
}

(async () => {

  // `INSERT INTO apr (id, "address", "transactionTime", "completionTime", floor, "transferFloor", "hasElevator", "hasCommittee", "hasCompartment", "buildingTransferArea", price, "unitPrice", "parkingSpaceTransferArea", "parkingSpacePrice", "landTransferArea", "roomNumber", "hallNumber", "bathNumber", "buildingArea", "subBuildingArea", "belconyArea", "landAmount", "buildingAmount", "parkAmount", "urbanLandUse", "nonUrbanLandUse", "nonUrbanLandUsePlanning", "buildingType", "parkingSpaceType", "priceWithoutParking", coordinate) VALUES ('${apr.id}', '${apr.address}', '${apr.transactionTime}', '${apr.completionTime}', ${apr.floor}, ${apr.transferFloor}, ${apr.hasElevator}, ${apr.hasCommittee}, ${apr.hasCompartment}, ${apr.buildingTransferArea}, ${apr.price}, ${apr.unitPrice}, ${apr.parkingSpaceTransferArea}, ${apr.parkingSpacePrice}, ${apr.landTransferArea}, ${apr.roomNumber}, ${apr.hallNumber}, ${apr.bathNumber}, ${apr.buildingArea}, ${apr.subBuildingArea}, ${apr.belconyArea}, ${apr.landAmount}, ${apr.buildingAmount}, ${apr.parkAmount}, ${apr.urbanLandUse}, ${apr.nonUrbanLandUse}, ${apr.nonUrbanLandUsePlanning}, ${apr.buildingType}, ${apr.parkingSpaceType}, ${apr.priceWithoutParking}, 'SRID=4326;POINT(${apr.coordinate_x} ${apr.coordinate_y})');`
  // 新增db connection
  const connection = await createConnection()

  const counties = [
    // 'changhua',
    // 'chiayi',
    // 'chiayi_city',
    'hsinchu',
    // 'hsinchu_city',
    // 'hualien',
    // 'kaohsiung',
    // 'keelung',
    // 'kinmen',
    // 'lianjiang',
    // 'miaoli',
    // 'nantou',
    // 'penghu',
    // 'pingtung',
    // 'tainan',
    // 'taipei',
    // 'taitung',
    // 'yilan',
    // 'yunlin',
    // 'taoyuan',
    // 'newtaipei',
    // 'taichung'
  ]


  const importDataBySheetType = async <FT extends IAprFileGeneric, DT> ({
    county,
    sheetType
  }: IImportInfo, entityType: EntityTarget<AprLand>) => {
    const aprs = await readCsvFile<FT>(`./apr-output/${county}-${sheetType}.csv`)
    const repository = connection.getRepository(entityType)
    aprs.forEach(async (apr) => {
      let insertString = ``
      if (sheetType === 'deal') {
        insertString = `INSERT INTO apr (id, "address", "transactionTime", "completionTime", floor, "transferFloor", "hasElevator", "hasCommittee", "hasCompartment", "buildingTransferArea", price, "unitPrice", "parkingSpaceTransferArea", "parkingSpacePrice", "landTransferArea", "roomNumber", "hallNumber", "bathNumber", "buildingArea", "subBuildingArea", "belconyArea", "landAmount", "buildingAmount", "parkAmount", "urbanLandUse", "nonUrbanLandUse", "nonUrbanLandUsePlanning", "buildingType", "parkingSpaceType", "priceWithoutParking", coordinate) VALUES ('${apr.id}', '${apr.address}', '${apr.transactionTime}', '${apr.completionTime}', ${apr.floor}, ${apr.transferFloor}, ${apr.hasElevator}, ${apr.hasCommittee}, ${apr.hasCompartment}, ${apr.buildingTransferArea}, ${apr.price}, ${apr.unitPrice}, ${apr.parkingSpaceTransferArea}, ${apr.parkingSpacePrice}, ${apr.landTransferArea}, ${apr.roomNumber}, ${apr.hallNumber}, ${apr.bathNumber}, ${apr.buildingArea}, ${apr.subBuildingArea}, ${apr.belconyArea}, ${apr.landAmount}, ${apr.buildingAmount}, ${apr.parkAmount}, ${apr.urbanLandUse}, ${apr.nonUrbanLandUse}, ${apr.nonUrbanLandUsePlanning}, ${apr.buildingType}, ${apr.parkingSpaceType}, ${apr.priceWithoutParking}, 'SRID=4326;POINT(${apr.coordinate_x} ${apr.coordinate_y})');`
      }
      if (sheetType === 'land') {
        insertString = `INSERT INTO aprland ("aprId", "landTransferArea", "rightDenumerate", "rightNumerate", address, "landUse", "parcelNumber", "transferStatus") VALUES ('${apr.id}', ${apr.landTransferArea}, ${apr.rightDenumerate}, ${apr.rightNumerate}, '${apr.address}', '${apr.landUse}', '${apr.parcelNumber}', ${apr.transferStatus});`
      }
      if (sheetType === 'build') {
        insertString = `INSERT INTO aprbuild ("aprId", "usage", "material", "buildingLayer", "buildingTransferArea") VALUES ('${apr.id}', '${apr.usage}', '${apr.material}', '${apr.buildingLayer}', ${apr.buildingTransferArea});`
      }
      if (sheetType === 'park') {
        insertString = `INSERT INTO aprpark ("aprId", "locateLevel", "parkingSpaceType", "parkingSpacePrice", "parkingSpaceTransferArea") VALUES ('${apr.id}', '${apr.locateLevel}', ${apr.parkingSpaceType}, ${apr.parkingSpacePrice}, ${apr.parkingSpaceTransferArea});`
      }
      await repository.query(insertString)
      console.log(`${apr.id} ${county} input!`)
    })

  }

  // 讀取實價登陸資料
  for (let i = 0; i < counties.length; i++) {
    const county = counties[i]
    await importDataBySheetType({
      county: county,
      sheetType: 'land'
    }, AprLand)
  }




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

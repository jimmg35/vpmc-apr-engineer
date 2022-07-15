import { readCsvFile } from './io'
import { Apr, IApr } from './entity/Apr'
import { Commitee, ICommitee } from './entity/Commitee'
import { createConnection } from 'typeorm'
import { ILicense, License } from './entity/License'
import fs from 'fs'
import path from 'path'

const parseLicenseDate = (value: string) => {
  const dateArray = value.replace('年', '/').replace('月', '/').replace('日', '/').split('/')
  return Number(dateArray[0]) + 1911 + '/' + Number(dateArray[1]) + '/' + Number(dateArray[2])
}

(async () => {

  // 新增db connection
  const connection = await createConnection()

  const counties = fs.readdirSync(
    path.resolve(__dirname, '../repository')
  )

  // 讀取管委會資料
  // const commitees = await readCsvFile<ICommitee>('./db-input-data/license_geocoded_clip.csv')

  // 輸入管委會資料
  // const commitee_repository = await connection.getRepository(Commitee)
  // commitees.forEach(async (commitee) => {
  //   const queryString = `INSERT INTO commitee (date, organization, address, license, "licenseYear", "licenseCode", coordinate) VALUES ('${commitee.date}', '${commitee.organization}', '${commitee.address}', '${commitee.license}', '${commitee.licenseYear}', '${commitee.licenseCode}', 'SRID=4326;POINT(${commitee.longitude} ${commitee.latitude})');`
  //   await commitee_repository.query(queryString)
  // })

  // 讀取實價登陸資料
  const county = counties[22]
  const aprs = await readCsvFile<IApr>(`./db-input-data/${county}.csv`)
  const apr_repository = await connection.getRepository(Apr)
  aprs.forEach(async (apr) => {
    const queryString = `INSERT INTO apr (id, "transactionTime", "completionTime", floor, "transferFloor", "hasElevator", "hasCommittee", "hasCompartment", "buildingTransferArea", price, "unitPrice", "parkingSpaceTransferArea", "parkingSpacePrice", "landTransferArea", "roomNumber", "hallNumber", "bathNumber", "buildingArea", "subBuildingArea", "belconyArea", "landAmount", "buildingAmount", "parkAmount", "urbanLandUse", "nonUrbanLandUse", "nonUrbanLandUsePlanning", "buildingType", "parkingSpaceType", "priceWithoutParking", coordinate) VALUES ('${apr.id}', '${apr.transactionTime}', '${apr.completionTime}', ${apr.floor}, ${apr.transferFloor}, ${apr.hasElevator}, ${apr.hasCommittee}, ${apr.hasCompartment}, ${apr.buildingTransferArea}, ${apr.price}, ${apr.unitPrice}, ${apr.parkingSpaceTransferArea}, ${apr.parkingSpacePrice}, ${apr.landTransferArea}, ${apr.roomNumber}, ${apr.hallNumber}, ${apr.bathNumber}, ${apr.buildingArea}, ${apr.subBuildingArea}, ${apr.belconyArea}, ${apr.landAmount}, ${apr.buildingAmount}, ${apr.parkAmount}, ${apr.urbanLandUse}, ${apr.nonUrbanLandUse}, ${apr.nonUrbanLandUsePlanning}, ${apr.buildingType}, ${apr.parkingSpaceType}, ${apr.priceWithoutParking}, 'SRID=4326;POINT(${apr.coordinate_x} ${apr.coordinate_y})');`
    await apr_repository.query(queryString)
    console.log(`${apr.id} input!`)
  })


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

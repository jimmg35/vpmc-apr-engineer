import csvParser from 'csv-parser'
import { createObjectCsvWriter } from 'csv-writer'
import fs from 'fs'
import internal from 'stream'
import { langMapping } from '../schema/languageMapping'
import { getKeyByValue } from '../utility'
import { mapKeys } from 'lodash'
import { IDeal } from '../schema/deal'
import { Connection } from 'typeorm'
import { Commitee, ICommitee } from '../entity/Commitee'

export const zn2En = (params: { header: string, index: number }) => {
  return langMapping[params.header]
}

export const en2Zn = (params: { header: string, index: number }) => {
  return getKeyByValue(langMapping, params.header)
}

export const readCsvFileApr = async <T> (filePath: string): Promise<T[]> => {
  return new Promise((resolve) => {
    const results: T[] = []
    const stream: fs.ReadStream = fs.createReadStream(filePath)
    const transform: internal.Transform = stream.pipe(csvParser())
    transform.on('data', (data: T) => {
      results.push(data)
    })
    transform.on('end', () => {
      const translatedResults: T[] = []
      results.forEach((result: any) => {
        let resultTranslated: any = mapKeys(result, (value, key) => {
          if (langMapping[key] === undefined) {
            return 'town'
          }
          return langMapping[key]
        })
        resultTranslated.parsedValue = {}
        resultTranslated.logicalExamine = {}
        resultTranslated.calculatedPrice = {}
        translatedResults.push(resultTranslated)
      })
      resolve(translatedResults)
    })
  })
}

export const exportCsvFile = async (data: any[], filename: string) => {
  const header: any = []
  mapKeys(data[0], (value, key) => {
    const column = {
      id: key, title: key
    }
    header.push(column)
  })
  const csvWriter = createObjectCsvWriter({
    path: filename,
    header: header
  })
  // console.log(header)
  // console.log(data[0])
  await csvWriter.writeRecords(data)
  console.log('The CSV file was written successfully')


  // const csvWriter = createObjectCsvWriter({
  //   path: 'out.csv',
  //   header: [
  //     { id: 'name', title: 'Name' },
  //     { id: 'surname', title: 'Surname' },
  //     { id: 'age', title: 'Age' },
  //     { id: 'gender', title: 'Gender' },
  //   ]
  // });
  // const datas = [
  //   {
  //     name: 'John',
  //     surname: 'Snow',
  //     age: 26,
  //     gender: 'M'
  //   }, {
  //     name: 'Clair',
  //     surname: 'White',
  //     age: 33,
  //     gender: 'F',
  //   }, {
  //     name: 'Fancy',
  //     surname: 'Brown',
  //     age: 78,
  //     gender: 'F'
  //   }
  // ];

  // csvWriter
  //   .writeRecords(datas)
  //   .then(() => console.log('The CSV file was written successfully'));
}

export const readCsvFile = async <T> (filePath: string): Promise<T[]> => {
  return new Promise((resolve) => {
    const stream: fs.ReadStream = fs.createReadStream(filePath)
    const transform: internal.Transform = stream.pipe(csvParser())
    const results: T[] = []
    transform.on('data', (data: T) => {
      results.push(data)
    })
    transform.on('end', () => {
      stream.close()
      resolve(results)
    })
  })
}

import csvParser from 'csv-parser'
import { createObjectCsvWriter } from 'csv-writer'
import fs from 'fs'
import internal from 'stream'
import { ILangMapping } from '../schema/languageMapping'
import { getKeyByValue } from '../utility'
import { mapKeys } from 'lodash'
import { IDeal } from '../schema/deal'
import { Connection } from 'typeorm'
import { Commitee, ICommitee } from '../entity/Commitee'

// export const zn2En = (params: { header: string, index: number }) => {
//   return dealLangMapping[params.header]
// }

// export const en2Zn = (params: { header: string, index: number }) => {
//   return getKeyByValue(dealLangMapping, params.header)
// }

export const readCsvFileApr = async <T> (filePath: string, langMapping: ILangMapping): Promise<T[]> => {
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
        // console.log(result)
        let resultTranslated: any = mapKeys(result, (value, key) => {
          return langMapping[key.trim()]
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
  await csvWriter.writeRecords(data)
  console.log('The CSV file was written successfully')
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

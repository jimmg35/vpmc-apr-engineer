import csvParser from 'csv-parser'
import fs from 'fs'
import internal from 'stream'
import { langMapping } from '../schema/LanguageMapping'
import { getKeyByValue } from '../utility'
import { mapKeys } from 'lodash'

export const zn2En = (params: { header: string, index: number }) => {
  return langMapping[params.header]
}

export const en2Zn = (params: { header: string, index: number }) => {
  return getKeyByValue(langMapping, params.header)
}

export const readCsvFile = async <T> (filePath: string): Promise<T[]> => {
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
        translatedResults.push(resultTranslated)
      })
      resolve(translatedResults)
    })
  })
}
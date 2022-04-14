import csvParser from 'csv-parser'
import fs from 'fs'
import internal from 'stream'
import { langMapping } from '../schema/LanguageMapping'
import { getKeyByValue } from '../utility'

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
    const transform: internal.Transform = stream.pipe(csvParser({
      mapHeaders: zn2En
    }))
    transform.on('data', (data: T) => {
      results.push(data)
    })
    transform.on('end', () => {
      resolve(results)
    })
  })
}
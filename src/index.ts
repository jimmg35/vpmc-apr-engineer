import { readCsvFile } from './io'
import { IUnprocessedDeal } from './schema/Deal'
import { chain } from 'lodash'

declare global {
  interface Array<T> {
    showAll (): void;
  }
}

if (!Array.prototype.showAll) {
  Array.prototype.showAll = function <T> (this: T[]): void {
    this.map((elem) => {
      console.log(elem)
    })
    // return this.filter(e => e !== elem);
  }
}

(async () => {
  const deals = await readCsvFile<IUnprocessedDeal>('./repository/taipei/merged/taipei.csv')
  deals.showAll()

})()

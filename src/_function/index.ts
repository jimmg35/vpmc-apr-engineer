import { IDeal } from '../schema/Deal'
import parseTransactionTime from './Deal/parseTransactionTime'
import showDeviants from './Deal/showDeviant'
import parseCompletionTime from './Deal/parseCompletionTime'
import parseFloor from './Deal/parseFloor'
import parseTransferFloor from './Deal/parseTransferFloor'

declare global {
  interface Array<T> {
    showTop (): Array<T>
    parseTransactionTime (): Array<T>
    showDeviants (): Array<T>
    parseCompletionTime (): Array<T>
    parseFloor (): Array<T>
    parseTransferFloor (): Array<T>
  }
}

Object.defineProperty(Array.prototype, 'showTop', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    console.log(this[0])
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseTransactionTime', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseTransactionTime(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'showDeviants', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      showDeviants(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseCompletionTime', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseCompletionTime(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseFloor', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseFloor(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseTransferFloor', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseTransferFloor(row)
    })
    return this
  }
})

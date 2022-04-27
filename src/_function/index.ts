import { IDeal } from '../schema/deal'
import parseTransactionTime from './deal/parsing/parseTransactionTime'
import showDeviants from './deal/showDeviant'
import parseCompletionTime from './deal/parsing/parseCompletionTime'
import parseFloor from './deal/parsing/parseFloor'
import parseTransferFloor from './deal/parsing/parseTransferFloor'
import parseElevator from './deal/parsing/parseElevator'
import parseCommittee from './deal/parsing/parseCommittee'
import parseCompartment from './deal/parsing/parseCompartment'
import parseNumerical from './deal/parsing/parseNumerical'
import parseTransactionAmount from './deal/parsing/parseTransactionAmount'
import parseId from './deal/parsing/parseId'
import parseUrbanLandUse from './deal/parsing/parseUrbanLandUse'
import parseNonUrbanLandUse from './deal/parsing/parseNonUrbanLandUse'
import parseNonUrbanLandUsePlanning from './deal/parsing/parseNonUrbanLandUsePlanning'
import parseBuildingType from './deal/parsing/parseBuildingType'
import parseParkingSpaceType from './deal/parsing/parseParkingSpaceType'

import examineParsingResult from './deal/examine/examineParsingResult'

declare global {
  interface Array<T> {
    showTop (): Array<T>
    parseTransactionTime (): Array<T>
    showDeviants (): Array<T>
    parseCompletionTime (): Array<T>
    parseFloor (): Array<T>
    parseTransferFloor (): Array<T>
    parseElevator (): Array<T>
    parseCommittee (): Array<T>
    parseCompartment (): Array<T>
    parseNumerical (): Array<T>
    parseTransactionAmount (): Array<T>
    parseId (): Array<T>
    parseUrbanLandUse (): Array<T>
    parseNonUrbanLandUse (): Array<T>
    parseNonUrbanLandUsePlanning (): Array<T>
    parseBuildingType (): Array<T>
    parseParkingSpaceType (): Array<T>
    examineParsingResult (): Array<T>
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

Object.defineProperty(Array.prototype, 'parseElevator', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseElevator(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseCommittee', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseCommittee(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseCompartment', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseCompartment(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseNumerical', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseNumerical(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseTransactionAmount', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseTransactionAmount(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseId', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseId(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseUrbanLandUse', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseUrbanLandUse(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseNonUrbanLandUse', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseNonUrbanLandUse(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseNonUrbanLandUsePlanning', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseNonUrbanLandUsePlanning(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseBuildingType', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseBuildingType(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'parseParkingSpaceType', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      parseParkingSpaceType(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'examineParsingResult', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      examineParsingResult(row)
    })
    return this
  }
})

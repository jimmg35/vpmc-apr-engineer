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

import classifyParsingResult from './deal/classify/classifyParsingResult'
import classifyLogicalResult from './deal/classify/classifyLogicalResult'

import examineNotes from './deal/logicalExamine/examineNotes'
import examineBuildingType from './deal/logicalExamine/examineBuildingType'
import examineTransferFloor from './deal/logicalExamine/examineTransferFloor'
import examineTotalPrice from './deal/logicalExamine/examineTotalPrice'

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
    classifyParsingResult (): { parseSuccessCases: Array<IDeal>, parseFailCases: Array<IDeal> }
    classifyLogicalResult (): { examineSuccessCases: Array<IDeal>, examineFailCases: Array<IDeal> }
    examineNotes (): Array<T>
    examineBuildingType (): Array<T>
    examineTransferFloor (): Array<T>
    examineTotalPrice (): Array<T>
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

Object.defineProperty(Array.prototype, 'classifyParsingResult', {
  value: function <T> (this: Array<IDeal>): { parseSuccessCases: Array<IDeal>, parseFailCases: Array<IDeal> } {
    const parseFailCases: IDeal[] = []
    const parseSuccessCases: IDeal[] = []
    this.map((row) => {
      if (classifyParsingResult(row)) {
        parseSuccessCases.push(row)
      } else {
        parseFailCases.push(row)
      }
    })
    return { parseSuccessCases, parseFailCases }
  }
})

Object.defineProperty(Array.prototype, 'classifyLogicalResult', {
  value: function <T> (this: Array<IDeal>): { examineSuccessCases: Array<IDeal>, examineFailCases: Array<IDeal> } {
    const examineFailCases: IDeal[] = []
    const examineSuccessCases: IDeal[] = []
    this.map((row) => {
      if (classifyLogicalResult(row)) {
        examineSuccessCases.push(row)
      } else {
        examineFailCases.push(row)
      }
    })
    return { examineSuccessCases, examineFailCases }
  }
})

Object.defineProperty(Array.prototype, 'examineNotes', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      examineNotes(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'examineBuildingType', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      examineBuildingType(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'examineTransferFloor', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      examineTransferFloor(row)
    })
    return this
  }
})

Object.defineProperty(Array.prototype, 'examineTotalPrice', {
  value: function <T> (this: Array<IDeal>): Array<IDeal> {
    this.map((row) => {
      examineTotalPrice(row)
    })
    return this
  }
})

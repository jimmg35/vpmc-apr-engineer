import { IDeal } from '../../schema/deal'
import { mapKeys } from 'lodash'

const showDeviants = (row: IDeal) => {
  let isDeviant = false
  let problems: string[] = []
  mapKeys(row.parsedValue, (value, key) => {
    if (value) {
      if (value.status === 0 || value.status === 1) {
        isDeviant = true
        problems.push(key)
      }
    }
  })
  if (isDeviant)
    console.log('\x1b[36m %s \x1b[0m \x1b[41m %s \x1b[0m', `${row.id}`, `is deviant due to ${problems}`)
}

export default showDeviants

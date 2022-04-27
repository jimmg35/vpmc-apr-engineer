import { IDeal } from '../../../schema/deal'

// 建物移轉面積扣除車位面積，乘以單價，加上車位總價
const examineTotalPrice = (row: IDeal) => {
  // @ts-ignore
  const estimateTotalPrice = (row.parsedValue.buildingTransferArea?.value - row.parsedValue.parkingSpaceTransferArea?.value) * row.parsedValue.unitPrice?.value + row.parsedValue.parkingSpacePrice?.value
  // @ts-ignore
  const estimatePriceWithoutPark = (row.parsedValue.buildingTransferArea?.value - row.parsedValue.parkingSpaceTransferArea?.value) * row.parsedValue.unitPrice?.value
  row.calculatedPrice.price = estimateTotalPrice
  row.calculatedPrice.priceWithoutParking = estimatePriceWithoutPark
}

export default examineTotalPrice

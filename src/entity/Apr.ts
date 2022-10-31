import {
    Entity,
    Column,
    PrimaryColumn, Index
} from "typeorm"
import { Point } from 'geojson'

@Entity({ name: 'apr' })
export class Apr {

    @PrimaryColumn()
    id: string

    @Column({ nullable: true })
    transactionTime: Date

    @Column({ nullable: true })
    completionTime: Date

    @Column({ nullable: true })
    floor: number

    @Column({ nullable: true })
    transferFloor: number

    @Column({ nullable: true })
    hasElevator: number

    @Column({ nullable: true })
    hasCommittee: number

    @Column({ nullable: true })
    hasCompartment: number

    @Column({ type: 'decimal', nullable: true })
    buildingTransferArea: number

    @Column({ type: 'decimal', nullable: true })
    price: number

    @Column({ type: 'decimal', nullable: true })
    unitPrice: number

    @Column({ type: 'decimal', nullable: true })
    parkingSpaceTransferArea: number

    @Column({ type: 'decimal', nullable: true })
    parkingSpacePrice: number

    @Column({ type: 'decimal', nullable: true })
    landTransferArea: number

    @Column({ nullable: true })
    roomNumber: number

    @Column({ nullable: true })
    hallNumber: number

    @Column({ nullable: true })
    bathNumber: number

    @Column({ type: 'decimal', nullable: true })
    buildingArea: number

    @Column({ type: 'decimal', nullable: true })
    subBuildingArea: number

    @Column({ type: 'decimal', nullable: true })
    belconyArea: number

    @Column({ nullable: true })
    landAmount: number

    @Column({ nullable: true })
    buildingAmount: number

    @Column({ nullable: true })
    parkAmount: number

    @Column({ nullable: true })
    urbanLandUse: number

    @Column({ nullable: true })
    nonUrbanLandUse: number

    @Column({ nullable: true })
    nonUrbanLandUsePlanning: number

    @Column({ nullable: true })
    buildingType: number

    @Column({ nullable: true })
    parkingSpaceType: number

    @Column({ type: 'decimal', nullable: true })
    priceWithoutParking: number

    @Column({ nullable: true })
    address: string

    @Index({ spatial: true })
    @Column({
        type: 'geography',
        spatialFeatureType: 'Point',
        srid: 4326,
        nullable: true
    })
    coordinate: Point
}

export interface IApr {
    id: string
    transactionTime: Date
    completionTime: Date
    floor: number
    transferFloor: number
    hasElevator: number
    hasCommittee: number
    hasCompartment: number
    buildingTransferArea: number
    price: number
    unitPrice: number
    parkingSpaceTransferArea: number
    parkingSpacePrice: number
    landTransferArea: number
    roomNumber: number
    hallNumber: number
    bathNumber: number
    buildingArea: number
    subBuildingArea: number
    belconyArea: number
    landAmount: number
    buildingAmount: number
    parkAmount: number
    urbanLandUse: number
    nonUrbanLandUse: number
    nonUrbanLandUsePlanning: number
    buildingType: number
    parkingSpaceType: number
    priceWithoutParking: number
    address: string
    coordinate_x: number
    coordinate_y: number
}
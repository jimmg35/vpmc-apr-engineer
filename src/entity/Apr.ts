import {
    Entity,
    Column,
    PrimaryGeneratedColumn, Index,
    OneToMany, ManyToMany, JoinTable
} from "typeorm"
import { Point } from "geojson"
import { buildingType, hasCommittee, hasCompartment, hasElevator, nonUrbanLandUse, parkingSpaceType, urbanLandUse } from "../_function/deal/enum"

@Entity({ name: 'deal' })
export class Deal {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text', unique: true })
    aprId: string

    @Column({ nullable: true, type: 'timestamptz' })
    transactionTime: Date

    @Column({ nullable: true, type: 'timestamptz' })
    completionTime: Date

    @Column({ nullable: true })
    floor: number

    @Column({
        type: 'integer',
        default: null,
        nullable: true
    })
    hasElevator: number

    @Column({
        type: 'integer',
        default: null,
        nullable: true
    })
    hasCommittee: number

    @Column({
        type: 'integer',
        default: null,
        nullable: true
    })
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

    @Column({
        type: 'integer',
        default: null,
        nullable: true
    })
    urbanLandUse: number

    @Column({
        type: 'integer',
        default: null,
        nullable: true
    })
    nonUrbanLandUse: number

    @Column({ nullable: true })
    nonUrbanLandUsePlanning: number

    @Column({
        type: 'integer',
        default: null,
        nullable: true
    })
    buildingType: number

    @Column({
        type: 'integer',
        default: null,
        nullable: true
    })
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

import {
    Entity,
    Column,
    PrimaryGeneratedColumn, Index,
    OneToMany, ManyToMany, JoinTable
} from "typeorm"
import { Point } from "geojson"
import { buildingType, hasCommittee, hasCompartment, hasElevator, nonUrbanLandUse, parkingSpaceType, urbanLandUse } from "../_function/deal/enum"
import { StringChain } from "lodash"

@Entity({ name: 'deal' })
export class Deal {

    @PrimaryGeneratedColumn('uuid')
    id: string


    @Column({ type: 'text' })
    town_raw: string

    @Column({ type: 'text' })
    transactionTarget_raw: string

    @Column({ type: 'text' })
    address_raw: string

    @Column({ type: 'text' })
    landTransferArea_raw: string

    @Column({ type: 'text' })
    urbanLandUse_raw: string

    @Column({ type: 'text' })
    nonUrbanLandUse_raw: string

    @Column({ type: 'text' })
    nonUrbanLandUsePlanning_raw: string

    @Column({ type: 'text' })
    transactionTime_raw: string

    @Column({ type: 'text' })
    transactionAmount_raw: string

    @Column({ type: 'text' })
    transferFloor_raw: string

    @Column({ type: 'text' })
    floor_raw: string

    @Column({ type: 'text' })
    buildingType_raw: string

    @Column({ type: 'text' })
    usage_raw: string

    @Column({ type: 'text' })
    buildingMaterial_raw: string

    @Column({ type: 'text' })
    completionTime_raw: string

    @Column({ type: 'text' })
    buildingTransferArea_raw: string

    @Column({ type: 'text' })
    roomNumber_raw: string

    @Column({ type: 'text' })
    hallNumber_raw: string

    @Column({ type: 'text' })
    bathNumber_raw: string

    @Column({ type: 'text' })
    hasCompartment_raw: string

    @Column({ type: 'text' })
    hasCommittee_raw: string

    @Column({ type: 'text' })
    price_raw: string

    @Column({ type: 'text' })
    unitPrice_raw: string

    @Column({ type: 'text' })
    parkingSpaceType_raw: string

    @Column({ type: 'text' })
    parkingSpaceTransferArea_raw: string

    @Column({ type: 'text' })
    parkingSpacePrice_raw: string

    @Column({ type: 'text' })
    hasNotes_raw: string

    @Column({ type: 'text' })
    notes_raw: string

    @Column({ type: 'text' })
    id_raw: string

    @Column({ type: 'text' })
    buildingArea_raw: string

    @Column({ type: 'text' })
    subBuildingArea_raw: string

    @Column({ type: 'text' })
    belconyArea_raw: string

    @Column({ type: 'text' })
    hasElevator_raw: string


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
        type: 'text',
        default: null,
        nullable: true
    })
    urbanLandUse: string

    @Column({
        type: 'text',
        default: null,
        nullable: true
    })
    nonUrbanLandUse: string

    @Column({
        type: 'text',
        default: null,
        nullable: true
    })
    nonUrbanLandUsePlanning: string

    @Column({
        type: 'text',
        default: null,
        nullable: true
    })
    usage: string

    @Column({
        type: 'text',
        default: null,
        nullable: true
    })
    transferFloorRaw: string

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
    town_raw: string
    transactionTarget_raw: string
    address_raw: string
    landTransferArea_raw: string
    urbanLandUse_raw: string
    nonUrbanLandUse_raw: string
    nonUrbanLandUsePlanning_raw: string
    transactionTime_raw: string
    transactionAmount_raw: string
    transferFloor_raw: string
    floor_raw: string
    buildingType_raw: string
    usage_raw: string
    buildingMaterial_raw: string
    completionTime_raw: string
    buildingTransferArea_raw: string
    roomNumber_raw: string
    hallNumber_raw: string
    bathNumber_raw: string
    hasCompartment_raw: string
    hasCommittee_raw: string
    price_raw: string
    unitPrice_raw: string
    parkingSpaceType_raw: string
    parkingSpaceTransferArea_raw: string
    parkingSpacePrice_raw: string

    hasNotes_raw: string
    notes_raw: string
    id_raw: string
    buildingArea_raw: string
    subBuildingArea_raw: string
    belconyArea_raw: string
    hasElevator_raw: string


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
    urbanLandUse: string
    nonUrbanLandUse: string
    nonUrbanLandUsePlanning: string
    usage: string
    transferFloorRaw: string
    buildingType: number
    parkingSpaceType: number
    priceWithoutParking: number
    address: string
    coordinate_x: number
    coordinate_y: number
}

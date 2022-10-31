import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from "typeorm"

@Entity({ name: 'aprpark' })
export class AprPark {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    aprId: string

    @Column({ nullable: true })
    locateLevel: string

    @Column()
    parkingSpaceType: number

    @Column({ type: 'decimal' })
    parkingSpacePrice: number

    @Column({ type: 'decimal' })
    parkingSpaceTransferArea: number
}

export interface IAprPark {
    id: string
    locateLevel: string
    parkingSpaceType: number
    parkingSpacePrice: number
    parkingSpaceTransferArea: number
}
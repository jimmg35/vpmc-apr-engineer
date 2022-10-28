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

    @Column({ type: 'double precision' })
    parkingSpacePrice: number

    @Column({ type: 'double precision' })
    parkingSpaceTransferArea: number
}

export interface IAprPark {
    id: string
    locateLevel: string
    parkingSpaceType: number
    parkingSpacePrice: number
    parkingSpaceTransferArea: number
}
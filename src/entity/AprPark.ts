import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany, ManyToMany, JoinTable
} from "typeorm"
import { parkingSpaceType } from "../_function/deal/enum"

@Entity({ name: 'park' })
export class Park {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: 'text' })
    aprId: string

    @Column({ type: 'integer', nullable: true })
    locateLevel: number

    @Column({
        type: 'integer',
        default: null,
        nullable: true
    })
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

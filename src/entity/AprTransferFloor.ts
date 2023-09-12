import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany, ManyToMany, JoinTable
} from "typeorm"
import { parkingSpaceType } from "../_function/deal/enum"

@Entity({ name: 'transferfloor' })
export class TransferFloor {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: 'text' })
    aprId: string

    @Column({ type: 'decimal' })
    floor: number


}

export interface IAprPark {
    id: string
    floor: number
}

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany, ManyToMany, JoinTable
} from "typeorm"
import { landTransferStatusType } from "../_function/deal/enum"

@Entity({ name: 'land' })
export class Land {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    aprId: string

    @Column({ type: 'decimal' })
    landTransferArea: number

    @Column({ type: 'decimal' })
    rightDenumerate: number

    @Column({ type: 'decimal' })
    rightNumerate: number

    @Column({ type: 'text' })
    address: string

    @Column({ type: 'text' })
    landUse: string

    @Column({ type: 'text' })
    parcelNumber: string

    @Column({
        type: 'integer',
        default: null,
        nullable: true
    })
    transferStatus: number;

}

export interface IAprLand {
    id: string
    landTransferArea: number
    rightDenumerate: number
    rightNumerate: number
    address: string
    landUse: string
    parcelNumber: string
    transferStatus: number
}

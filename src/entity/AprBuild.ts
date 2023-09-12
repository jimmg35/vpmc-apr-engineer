import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany, ManyToMany, JoinTable
} from "typeorm"

@Entity({ name: 'build' })
export class Build {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    aprId: string

    @Column({ type: 'text' })
    usage: string

    @Column({ type: 'text' })
    material: string

    @Column({ type: 'text', nullable: true })
    buildingLayer: string

    @Column({ type: 'decimal' })
    buildingTransferArea: number

}

export interface IAprBuild {
    id: string
    usage: string
    material: string
    buildingLayer: string
    buildingTransferArea: number
}

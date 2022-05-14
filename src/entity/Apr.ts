import {
    Entity,
    Column,
    PrimaryColumn
} from "typeorm"

@Entity({ name: 'apr' })
export class Apr {

    @PrimaryColumn()
    id: string

    @Column()
    date: Date

    @Column()
    organization: string

    @Column()
    licenseYear: string

    @Column()
    licenseCode: string

    @Column("geography")
    coordinate: string

}
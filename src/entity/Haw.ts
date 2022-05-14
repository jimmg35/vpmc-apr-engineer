import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable
} from "typeorm"

@Entity({ name: 'haw' })
export class Haw {

  @PrimaryGeneratedColumn("uuid")
  userId!: string

  @Column({ length: 20, unique: true })
  username!: string

  @Column()
  password!: string


}
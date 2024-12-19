import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';

export enum UserRole {
    CLIENT = 'client',
    MOD = 'mod',
    ADMIN = 'admin',
}

@Entity('Shop')
export class Shop {
    @PrimaryGeneratedColumn() // Automatically generates a primary key (userId)
    userId!: number;
    @Column({ type: 'varchar', length: 64, unique: true, nullable: true }) // Email column
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: false }) 
    password: string;

    @Column({ type: 'varchar', length: 16, nullable: false }) // phoneNumber column
    phoneNumber: string;

    @Column({type: Boolean,default:false})
    verify: boolean

    @Column({
        type: 'enum',
        enum: UserRole, 
        default: UserRole.CLIENT,nullable: false})
    role: string

    @Column({ type: 'int', default: 1 }) // createdBy column
    createdBy: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdDate: Date;

    @Column({ type: 'int', default: 1 })
    updatedBy: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedDate: Date;
    constructor(
        email: string, 
        password: string, 
        phoneNumber: string,
        verify: boolean = false,
        role: UserRole = UserRole.CLIENT,
        createdBy: number = 1,
        createdDate: Date = new Date(),
        updatedBy: number = 1,
        updatedDate: Date = new Date()
    ) {
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.verify = verify
        this.role = role
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
    }

}

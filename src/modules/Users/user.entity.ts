import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
@Entity('User')
export class User {
    @PrimaryGeneratedColumn() // Automatically generates a primary key (userId)
    userId!: number;
    
    @Column({ type: 'varchar', length: 32, unique: true, nullable: false }) // userName column
    userName: string;

    @Column({ type: 'varchar', length: 255, nullable: false }) // password column
    password: string;

    @Column({ type: 'varchar', length: 255, nullable: true }) // uass column
    uass: string;

    @Column({ type: 'varchar', length: 36, unique: true }) // uuid column
    uuid: string;

    @Column({ type: 'varchar', length: 128 }) // fullName column
    fullName: string;

    @Column({ type: 'varchar', length: 64, nullable: true }) // Email column
    email: string;

    @Column({ type: 'varchar', length: 16, nullable: true }) // phoneNumber column
    phoneNumber: string;

    @Column({ type: 'int', default: 1 }) // createdBy column
    createdBy: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdDate: Date;

    @Column({ type: 'int', default: 1 })
    updatedBy: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedDate: Date;
    constructor(
        userName: string, 
        password: string, 
        uass: string, 
        uuid: string, 
        fullName: string, 
        email: string, 
        phoneNumber: string,
        createdBy: number = 1,
        createdDate: Date = new Date(),
        updatedBy: number = 1,
        updatedDate: Date = new Date()
    ) {

        this.userName = userName;
        this.password = password;
        this.uass = uass;
        this.uuid = uuid;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
    }

}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('UserAdvance') // Specify the table name in the database
export class UserAdvance {
    @PrimaryGeneratedColumn() // userId will be the primary key
    userId!: number;

    @Column({ type: 'varchar', length: 256, nullable: true }) // address column
    address?: string;

    @Column({ type: 'date', nullable: true }) // dob column
    dob?: string;

    @Column({ type: 'varchar', length: 128, nullable: true }) // profileUrl column
    profileUrl?: string;

    @Column({ type: 'int', default: 1 }) // createdBy column
    createdBy: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }) // createdDate column
    createdDate: Date;

    @Column({ type: 'int', default: 1 }) // updatedBy column
    updatedBy: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" }) // updatedDate column
    updatedDate: Date;

    constructor(
        address?: string,
        dob?: string,
        profileUrl?: string,
        createdBy: number = 1,
        createdDate: Date = new Date(),
        updatedBy: number = 1,
        updatedDate: Date = new Date()
    ) {
        this.address = address;
        this.dob = dob;
        this.profileUrl = profileUrl;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
    }
}

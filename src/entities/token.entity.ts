import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("Token")
export class Token {
  @PrimaryGeneratedColumn() // Primary key
  tokenId!: number;
  @Column({ type: "varchar", length: 255, nullable: false }) // password column
  accessToken: string;
  @Column({ type: "varchar", length: 255, nullable: false }) // password column
  refreshToken: string;

  constructor(accessToken: string, refreshToken: string) {
    (this.accessToken = accessToken), (this.refreshToken = refreshToken);
  }
}
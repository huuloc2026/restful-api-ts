var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
let User = class User {
    userId;
    userName;
    password;
    uass;
    uuid;
    fullName;
    email;
    phoneNumber;
    createdBy;
    createdDate;
    updatedBy;
    updatedDate;
    constructor(userName, password, uass, uuid, fullName, email, phoneNumber, createdBy = 1, createdDate = new Date(), updatedBy = 1, updatedDate = new Date()) {
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
};
__decorate([
    PrimaryGeneratedColumn() // Automatically generates a primary key (userId)
    ,
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
__decorate([
    Column({ type: 'varchar', length: 32, unique: true, nullable: false }) // userName column
    ,
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    Column({ type: 'varchar', length: 255, nullable: false }) // password column
    ,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Column({ type: 'varchar', length: 255, nullable: true }) // uass column
    ,
    __metadata("design:type", String)
], User.prototype, "uass", void 0);
__decorate([
    Column({ type: 'varchar', length: 36, unique: true }) // uuid column
    ,
    __metadata("design:type", String)
], User.prototype, "uuid", void 0);
__decorate([
    Column({ type: 'varchar', length: 128 }) // fullName column
    ,
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    Column({ type: 'varchar', length: 64, nullable: true }) // Email column
    ,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column({ type: 'varchar', length: 16, nullable: true }) // phoneNumber column
    ,
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    Column({ type: 'int', default: 1 }) // createdBy column
    ,
    __metadata("design:type", Number)
], User.prototype, "createdBy", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], User.prototype, "createdDate", void 0);
__decorate([
    Column({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], User.prototype, "updatedBy", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], User.prototype, "updatedDate", void 0);
User = __decorate([
    Entity('User'),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, Number, Date, Number, Date])
], User);
export { User };
//# sourceMappingURL=User.entity.js.map
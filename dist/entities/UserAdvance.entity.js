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
let UserAdvance = class UserAdvance {
    userId;
    address;
    dob;
    profileUrl;
    createdBy;
    createdDate;
    updatedBy;
    updatedDate;
    constructor(address, dob, profileUrl, createdBy = 1, createdDate = new Date(), updatedBy = 1, updatedDate = new Date()) {
        this.address = address;
        this.dob = dob;
        this.profileUrl = profileUrl;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
    }
};
__decorate([
    PrimaryGeneratedColumn() // userId will be the primary key
    ,
    __metadata("design:type", Number)
], UserAdvance.prototype, "userId", void 0);
__decorate([
    Column({ type: 'varchar', length: 256, nullable: true }) // address column
    ,
    __metadata("design:type", String)
], UserAdvance.prototype, "address", void 0);
__decorate([
    Column({ type: 'date', nullable: true }) // dob column
    ,
    __metadata("design:type", String)
], UserAdvance.prototype, "dob", void 0);
__decorate([
    Column({ type: 'varchar', length: 128, nullable: true }) // profileUrl column
    ,
    __metadata("design:type", String)
], UserAdvance.prototype, "profileUrl", void 0);
__decorate([
    Column({ type: 'int', default: 1 }) // createdBy column
    ,
    __metadata("design:type", Number)
], UserAdvance.prototype, "createdBy", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }) // createdDate column
    ,
    __metadata("design:type", Date)
], UserAdvance.prototype, "createdDate", void 0);
__decorate([
    Column({ type: 'int', default: 1 }) // updatedBy column
    ,
    __metadata("design:type", Number)
], UserAdvance.prototype, "updatedBy", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" }) // updatedDate column
    ,
    __metadata("design:type", Date)
], UserAdvance.prototype, "updatedDate", void 0);
UserAdvance = __decorate([
    Entity('UserAdvance') // Specify the table name in the database
    ,
    __metadata("design:paramtypes", [String, String, String, Number, Date, Number, Date])
], UserAdvance);
export { UserAdvance };
//# sourceMappingURL=UserAdvance.entity.js.map
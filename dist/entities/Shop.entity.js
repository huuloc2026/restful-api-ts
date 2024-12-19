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
export var UserRole;
(function (UserRole) {
    UserRole["CLIENT"] = "client";
    UserRole["MOD"] = "mod";
    UserRole["ADMIN"] = "admin";
})(UserRole || (UserRole = {}));
let Shop = class Shop {
    userId;
    email;
    password;
    phoneNumber;
    verify;
    role;
    createdBy;
    createdDate;
    updatedBy;
    updatedDate;
    constructor(email, password, phoneNumber, verify = false, role = UserRole.CLIENT, createdBy = 1, createdDate = new Date(), updatedBy = 1, updatedDate = new Date()) {
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.verify = verify;
        this.role = role;
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
], Shop.prototype, "userId", void 0);
__decorate([
    Column({ type: 'varchar', length: 64, unique: true, nullable: true }) // Email column
    ,
    __metadata("design:type", String)
], Shop.prototype, "email", void 0);
__decorate([
    Column({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Shop.prototype, "password", void 0);
__decorate([
    Column({ type: 'varchar', length: 16, nullable: false }) // phoneNumber column
    ,
    __metadata("design:type", String)
], Shop.prototype, "phoneNumber", void 0);
__decorate([
    Column({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Shop.prototype, "verify", void 0);
__decorate([
    Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.CLIENT, nullable: false
    }),
    __metadata("design:type", String)
], Shop.prototype, "role", void 0);
__decorate([
    Column({ type: 'int', default: 1 }) // createdBy column
    ,
    __metadata("design:type", Number)
], Shop.prototype, "createdBy", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Shop.prototype, "createdDate", void 0);
__decorate([
    Column({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Shop.prototype, "updatedBy", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Shop.prototype, "updatedDate", void 0);
Shop = __decorate([
    Entity('Shop'),
    __metadata("design:paramtypes", [String, String, String, Boolean, String, Number, Date, Number, Date])
], Shop);
export { Shop };
//# sourceMappingURL=Shop.entity.js.map
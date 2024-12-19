var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
export class UpdateUserDTO {
    userName;
    fullName;
    email;
    phoneNumber;
}
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "userName", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "fullName", void 0);
__decorate([
    IsEmail({}, { message: 'Invalid email format' }),
    IsOptional(),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "email", void 0);
__decorate([
    IsString(),
    IsOptional(),
    Length(10, 15, { message: 'phoneNumber must be between 10 and 15 characters' }),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "phoneNumber", void 0);
//# sourceMappingURL=UpdateUserDTO.js.map
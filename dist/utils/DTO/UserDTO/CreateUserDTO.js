var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches } from 'class-validator';
export class CreateUserDTO {
    userName;
    password;
    fullName;
    email;
    phoneNumber;
}
__decorate([
    Expose(),
    IsString(),
    IsNotEmpty({ message: 'userName is required' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "userName", void 0);
__decorate([
    Expose(),
    IsString(),
    IsNotEmpty({ message: 'password is required' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "password", void 0);
__decorate([
    Expose(),
    IsString(),
    IsNotEmpty({ message: 'fullName is required' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "fullName", void 0);
__decorate([
    Expose(),
    IsEmail({}, { message: 'Invalid email format' }),
    IsOptional(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
__decorate([
    IsString(),
    IsOptional(),
    Length(10, 15, { message: 'phoneNumber must be between 10 and 15 characters' }),
    Matches(/^\+?[1-9]\d{1,14}$/, { message: 'phoneNumber must be a valid phone number' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "phoneNumber", void 0);
//# sourceMappingURL=CreateUserDTO.js.map
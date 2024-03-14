"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const prisma_service_1 = require("../../prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    updatePassword(payload, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.prisma.user.findUnique({
                where: { id }
            });
            if (!user) {
                throw new common_1.HttpException("invalid_credentials", common_1.HttpStatus.UNAUTHORIZED);
            }
            const areEqual = yield (0, bcrypt_1.compare)(payload.old_password, user.password);
            if (!areEqual) {
                throw new common_1.HttpException("invalid_credentials", common_1.HttpStatus.UNAUTHORIZED);
            }
            return yield this.prisma.user.update({
                where: { id },
                data: { password: yield (0, bcrypt_1.hash)(payload.new_password, 10) }
            });
        });
    }
    findByLogin(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            const user = yield this.prisma.user.findFirst({
                where: { email }
            });
            if (!user) {
                throw new common_1.HttpException("invalid_credentials", common_1.HttpStatus.UNAUTHORIZED);
            }
            const areEqual = yield (0, bcrypt_1.compare)(password, user.password);
            if (!areEqual) {
                throw new common_1.HttpException("invalid_credentials", common_1.HttpStatus.UNAUTHORIZED);
            }
            const { password: p } = user, rest = __rest(user, ["password"]);
            return rest;
        });
    }
    findByPayload(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email }) {
            return yield this.prisma.user.findFirst({
                where: { email }
            });
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../prisma.service");
const users_service_1 = require("../../users/services/users.service");
let AuthenticationService = class AuthenticationService {
    constructor(prisma, jwtService, usersService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.usersService = usersService;
    }
    login(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.usersService.findByLogin(loginUserDto);
                if (!user) {
                    throw new Error('User not found');
                }
                const token = this._createToken(user);
                return Object.assign({}, token);
            }
            catch (error) {
                throw new Error(`Login failed: ${error.message}`);
            }
        });
    }
    _createToken({ login }) {
        const user = { login };
        const token = this.jwtService.sign(user);
        return {
            accessToken: token,
        };
    }
    validateUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findByPayload(payload);
            if (!user) {
                throw new common_1.HttpException("INVALID_TOKEN", common_1.HttpStatus.UNAUTHORIZED);
            }
            return user;
        });
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        users_service_1.UsersService])
], AuthenticationService);
//# sourceMappingURL=authentication.service.js.map
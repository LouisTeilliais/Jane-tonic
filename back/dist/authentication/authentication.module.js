"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
const common_1 = require("@nestjs/common");
const authentication_service_1 = require("./services/authentication.service");
const users_module_1 = require("../users/users.module");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("./controller/auth.controller");
const users_service_1 = require("../users/services/users.service");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const prisma_service_1 = require("../prisma.service");
const user_repository_service_1 = require("../users/services/repositories/user.repository.service");
let AuthenticationModule = class AuthenticationModule {
};
exports.AuthenticationModule = AuthenticationModule;
exports.AuthenticationModule = AuthenticationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
                property: 'user',
                session: false,
            }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRETKEY,
                signOptions: {
                    expiresIn: process.env.EXPIRESIN,
                },
            }),
        ],
        controllers: [auth_controller_1.AuthenticationController],
        providers: [authentication_service_1.AuthenticationService, users_service_1.UsersService, jwt_strategy_1.JwtStrategy, prisma_service_1.PrismaService, user_repository_service_1.default],
        exports: [
            passport_1.PassportModule,
            jwt_1.JwtModule
        ],
    })
], AuthenticationModule);
//# sourceMappingURL=authentication.module.js.map
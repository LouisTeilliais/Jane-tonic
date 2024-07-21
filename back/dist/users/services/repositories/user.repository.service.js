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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma.service");
let UserRepositoryService = class UserRepositoryService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.include = {
            session: true
        };
    }
    findAllSessions() {
        return this.prismaService.user.findMany();
    }
    createSession(userData) {
        return this.prismaService.user.create({
            data: {
                email: userData.email,
                firstname: userData.firstname,
                lastname: userData.lastname,
                phoneNumber: userData.phoneNumber,
                sessionId: userData.sessionId
            },
            include: this.include
        });
    }
};
UserRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRepositoryService);
exports.default = UserRepositoryService;
//# sourceMappingURL=user.repository.service.js.map
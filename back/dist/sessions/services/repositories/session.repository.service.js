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
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma.service");
let SessionRepositoryService = class SessionRepositoryService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAllSessions() {
        return this.prismaService.sessions.findMany();
    }
    findById(sessionId) {
        return this.prismaService.sessions.findFirst({
            where: {
                sessionId
            }
        });
    }
    createSession(sessionData) {
        return this.prismaService.sessions.create({
            data: {
                place: sessionData.place,
                level: sessionData.level,
                hour: sessionData.hour,
                type: sessionData.type,
                date: sessionData.date,
                numberUserMax: sessionData.numberUserMax,
            }
        });
    }
    updateSession(sessionId, sessionData) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = yield this.findById(sessionId);
            if (!session) {
                return null;
            }
            return this.prismaService.sessions.update({
                where: {
                    sessionId
                },
                data: {
                    place: sessionData.place,
                    level: sessionData.level,
                    hour: sessionData.hour,
                    type: sessionData.type,
                    date: sessionData.date,
                    numberUserMax: sessionData.numberUserMax,
                }
            });
        });
    }
    deleteSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = yield this.findById(sessionId);
            if (!session) {
                return null;
            }
            return this.prismaService.sessions.delete({
                where: {
                    sessionId
                }
            });
        });
    }
};
SessionRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SessionRepositoryService);
exports.default = SessionRepositoryService;
//# sourceMappingURL=session.repository.service.js.map
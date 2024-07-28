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
        this.include = {
            sessionType: true,
            users: true
        };
    }
    findAllSessions() {
        return this.prismaService.session.findMany({
            include: this.include
        });
    }
    findIncomingSessions() {
        const currentDate = new Date();
        const startOfDay = new Date(currentDate);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(currentDate);
        endOfDay.setHours(23, 59, 59, 999);
        return this.prismaService.session.findMany({
            where: {
                OR: [
                    {
                        date: {
                            gte: startOfDay,
                            lte: endOfDay
                        }
                    },
                    {
                        date: {
                            gt: endOfDay
                        }
                    }
                ]
            },
            orderBy: {
                date: 'asc'
            },
            include: this.include
        });
    }
    findById(sessionId) {
        return this.prismaService.session.findFirst({
            where: {
                sessionId
            },
            include: this.include
        });
    }
    createSession(sessionData) {
        return this.prismaService.session.create({
            data: {
                place: sessionData.place,
                level: sessionData.level,
                hour: sessionData.hour,
                date: sessionData.date,
                numberUserMax: sessionData.numberUserMax,
                sessionType: sessionData.sessionTypeId ? { connect: { sessionTypeId: sessionData.sessionTypeId } } : undefined
            },
            include: this.include
        });
    }
    updateSession(sessionId, sessionData) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = yield this.findById(sessionId);
            if (!session) {
                return null;
            }
            return this.prismaService.session.update({
                where: {
                    sessionId
                },
                data: {
                    place: sessionData.place,
                    level: sessionData.level,
                    hour: sessionData.hour,
                    date: sessionData.date,
                    numberUserMax: sessionData.numberUserMax,
                    sessionType: sessionData.sessionTypeId ? { connect: { sessionTypeId: sessionData.sessionTypeId } } : undefined
                }
            });
        });
    }
    updateSessionMember(sessionId, sessionData) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = yield this.findById(sessionId);
            if (!session) {
                return null;
            }
            return this.prismaService.session.update({
                where: {
                    sessionId
                },
                data: {
                    numberUserReserved: sessionData.numberUserReserved,
                    isFull: sessionData.isFull
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
            return this.prismaService.session.delete({
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
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.SessionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
const session_dto_1 = require("../models/dto/session.dto");
const jwt_auth_guard_1 = require("../../authentication/guards/jwt-auth.guard");
let SessionController = class SessionController {
    constructor(sessionControllerService) {
        this.sessionControllerService = sessionControllerService;
    }
    getIncomingSessions() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionControllerService.getIncomingSessions();
        });
    }
    getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionControllerService.getAllSession();
        });
    }
    getOneSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionControllerService.getSessionById(sessionId);
        });
    }
    postProject(sessionDto) {
        return this.sessionControllerService.createSession(sessionDto);
    }
    updateSession(sessionDto, sessionId) {
        return this.sessionControllerService.updateSession(sessionId, sessionDto);
    }
    deleteSession(sessionId) {
        return this.sessionControllerService.deleteSession(sessionId);
    }
};
exports.SessionController = SessionController;
__decorate([
    (0, common_1.Get)('/next'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "getIncomingSessions", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "getAllProjects", null);
__decorate([
    (0, common_1.Get)(':sessionId'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('sessionId', common_1.ParseIntPipe, new common_1.DefaultValuePipe('0'))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "getOneSession", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [session_dto_1.SessionDto]),
    __metadata("design:returntype", void 0)
], SessionController.prototype, "postProject", null);
__decorate([
    (0, common_1.Put)(":sessionId"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('sessionId', common_1.ParseIntPipe, new common_1.DefaultValuePipe('0'))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [session_dto_1.SessionDto, Number]),
    __metadata("design:returntype", void 0)
], SessionController.prototype, "updateSession", null);
__decorate([
    (0, common_1.Delete)(':sessionId'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('sessionId', common_1.ParseIntPipe, new common_1.DefaultValuePipe('0'))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SessionController.prototype, "deleteSession", null);
exports.SessionController = SessionController = __decorate([
    (0, swagger_1.ApiTags)('Sessions'),
    (0, common_1.Controller)('sessions'),
    __metadata("design:paramtypes", [services_1.SessionControllerService])
], SessionController);
//# sourceMappingURL=session.controller.js.map
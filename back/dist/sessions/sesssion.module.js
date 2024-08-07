"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_module_1 = require("./../authentication/authentication.module");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const services_1 = require("./services");
const controller_1 = require("./controller");
let SessionModule = class SessionModule {
};
SessionModule = __decorate([
    (0, common_1.Module)({
        imports: [authentication_module_1.AuthenticationModule],
        controllers: [controller_1.SessionController],
        providers: [services_1.SessionControllerService, services_1.SessionRepositoryService, prisma_service_1.PrismaService],
        exports: [],
    })
], SessionModule);
exports.default = SessionModule;
//# sourceMappingURL=sesssion.module.js.map
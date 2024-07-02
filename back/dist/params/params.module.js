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
const params_controller_1 = require("./controller/params.controller");
const params_controller_service_1 = require("./services/controllers/params.controller.service");
const params_repository_service_1 = require("./services/repositories/params.repository.service");
let ParamsModule = class ParamsModule {
};
ParamsModule = __decorate([
    (0, common_1.Module)({
        imports: [authentication_module_1.AuthenticationModule],
        controllers: [params_controller_1.ParamsController],
        providers: [params_controller_service_1.default, params_repository_service_1.default, prisma_service_1.PrismaService],
        exports: [],
    })
], ParamsModule);
exports.default = ParamsModule;
//# sourceMappingURL=params.module.js.map
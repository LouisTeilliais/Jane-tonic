"use strict";
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
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.setGlobalPrefix('api');
        app.enableCors({
            origin: ['http://localhost:5001/api'],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true
        });
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Jane Tonic')
            .setDescription('The Jane Tonic API description')
            .setVersion('1.0')
            .addTag('Api')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        const options = new swagger_1.DocumentBuilder().addBearerAuth();
        swagger_1.SwaggerModule.setup('Api', app, document);
        yield app.listen(process.env.APP_PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map
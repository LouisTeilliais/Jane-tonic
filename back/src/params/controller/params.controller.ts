import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import ParamsControllerService from "../services/controllers/params.controller.service";
import { JwtAuthGuard } from "src/authentication/guards/jwt-auth.guard";


@ApiTags('Params')
@Controller('params')
export class ParamsController {

    constructor(private readonly paramsControllerService: ParamsControllerService) {}

    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async getAllParams() {
        return this.paramsControllerService.getAllParams();
    }

}
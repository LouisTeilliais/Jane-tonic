import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { SessionControllerService } from "../services";
import { SessionDto } from "../models/dto/session.dto";

@ApiTags('Sessions')
@Controller('sessions')
export class SessionController {
    constructor(private readonly sessionControllerService: SessionControllerService) {}

    @Get()
    async getAllProjects() {
        return this.sessionControllerService.getAllSession();
    }

    @Get(':sessionId')
    async getOneSession(@Param('sessionId', ParseIntPipe, new DefaultValuePipe('0')) sessionId: number){
        return this.sessionControllerService.getSessionById(sessionId)
    }

    @Post()
    postProject(@Body() sessionDto: SessionDto) {
        return this.sessionControllerService.createSession(sessionDto)
    }

    @Put(":sessionId")
    updateSession(
        @Body() sessionDto: SessionDto,
        @Param('sessionId', ParseIntPipe, new DefaultValuePipe('0')) sessionId: number
    ){
        return this.sessionControllerService.updateSession(sessionId, sessionDto)
    }

    @Delete(':sessionId')
    deleteSession(
        @Param('sessionId', ParseIntPipe, new DefaultValuePipe('0')) sessionId: number
    ){
        return this.sessionControllerService.deleteSession(sessionId)
    }

}


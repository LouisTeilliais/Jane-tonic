import { Body, Controller, DefaultValuePipe, Delete, Get, Options, Param, ParseIntPipe, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { SessionControllerService } from "../services";
import { SessionDto } from "../models/dto/session.dto";
import { JwtAuthGuard } from "src/authentication/guards/jwt-auth.guard";
import { Request, Response } from 'express';

@ApiTags('Sessions')
@Controller('sessions')
export class SessionController {
    constructor(private readonly sessionControllerService: SessionControllerService) {}

    
    @Get('/next')
    async getIncomingSessions() {
        return this.sessionControllerService.getIncomingSessions();
    }
    
    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async getAllProjects() {
        return this.sessionControllerService.getAllSession();
    }
    
    @Get(':sessionId')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async getOneSession(@Param('sessionId', ParseIntPipe, new DefaultValuePipe('0')) sessionId: number){
        return this.sessionControllerService.getSessionById(sessionId)
    }

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    postProject(@Body() sessionDto: SessionDto) {
        return this.sessionControllerService.createSession(sessionDto)
    }

    @Put(":sessionId")
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    updateSession(
        @Body() sessionDto: SessionDto,
        @Param('sessionId', ParseIntPipe, new DefaultValuePipe('0')) sessionId: number
    ){
        return this.sessionControllerService.updateSession(sessionId, sessionDto)
    }

    @Delete(':sessionId')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    deleteSession(
        @Param('sessionId', ParseIntPipe) sessionId: number
    ){
        return this.sessionControllerService.deleteSession(sessionId)
    }


    @Options()
    optionsHandler(@Req() req: Request, @Res() res: Response) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return res.sendStatus(204);
}


}


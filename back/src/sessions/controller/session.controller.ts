import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { SessionControllerService } from "../services";
import { SessionDto } from "../models/dto/session.dto";

@ApiTags('Sessions')
@Controller('sessions')
export class SessionController {
    constructor(private readonly sessionControllerService: SessionControllerService) {}

    @Get()
    // @ApiBearerAuth()
    async getAllProjects() {
        return this.sessionControllerService.getAllSession();
    }

    @Get(':sessionId')
    async getOneSession(@Param('sessionId', ParseIntPipe, new DefaultValuePipe('0')) sessionId: number){
        return this.sessionControllerService.getSessionById(sessionId)
    }


    /**
     * Create
     * @public
     * @param projectDto ProjectDto
     */
    // @Profiles([Profile.Admin])
    // @UseGuards(JwtAuthGuard, ProfilesGuard)
    @Post()
    @ApiBearerAuth()
    // @ApiBadRequestResponse({ description: 'Invalid dto', type: ErrorDtoResponseModel })
    // @ApiUnauthorizedResponse({ description: 'Unauthorized', type: ErrorResponseModel })
    // @ApiOkResponse({ description: 'Created', type: ProjectResponseModel })
    postProject(@Body() sessionDto: SessionDto) {
        return this.sessionControllerService.createSession(sessionDto)
    }
}

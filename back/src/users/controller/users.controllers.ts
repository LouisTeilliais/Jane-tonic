import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Put,
    Query,
    Request,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {ApiQuery, ApiSecurity, ApiTags} from "@nestjs/swagger";
import { UsersService } from '../services/users.service';
import { JwtAuthGuard } from 'src/authentication/guards/jwt-auth.guard';
import { UpdatePasswordDto } from '../dto/users.user.dto';
@ApiTags('user')
@Controller('user')
export class UsersController {
    constructor(
        private readonly usersService: UsersService) {}

    // @UseGuards(JwtAuthGuard)
    // @ApiSecurity('access-key')
    // @UseInterceptors(ClassSerializerInterceptor)
    // @Get('me')
    // public async me(@Request() req) {
    //     return new RenderUser(req.user);
    // }

    @UseGuards(JwtAuthGuard)
    @ApiSecurity('access-key')
    @UseInterceptors(ClassSerializerInterceptor)
    @Put('update-password')
    public async updatePassword(@Request() req, @Body() 
                   updatePasswordDto: UpdatePasswordDto) {
        await this.usersService
         .updatePassword(updatePasswordDto, req.user.id);
        return {
            message: "password_update_success"
        };
    }

}
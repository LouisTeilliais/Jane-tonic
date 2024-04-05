import {
    Body,
    Controller,
    Post,
    UseGuards,
} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import { UsersService } from '../services/users.service';
import { JwtAuthGuard } from 'src/authentication/guards/jwt-auth.guard';
import { UserDto } from '../dto/users.user.dto';

@ApiTags('User')
@Controller('user')
export class UsersController {
    constructor(
        private readonly usersService: UsersService) {}

    @Post()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    createUser(@Body() userDto: UserDto){
        return this.usersService.createUser(userDto)
    }
}
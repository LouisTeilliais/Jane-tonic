import {
    Body,
    Controller,
    Post,
} from '@nestjs/common';
import { ApiTags} from "@nestjs/swagger";
import { UsersService } from '../services/users.service';
import { UserDto } from '../dto/users.user.dto';

@ApiTags('User')
@Controller('user')
export class UsersController {
    constructor(
        private readonly usersService: UsersService) {}

    @Post()
    createUser(@Body() userDto: UserDto){
        return this.usersService.createUser(userDto)
    }
}
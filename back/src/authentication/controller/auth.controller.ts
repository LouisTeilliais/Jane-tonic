import { LoginUserDto } from './../../users/dto/users.user.dto';
import { AuthenticationService } from './../services/authentication.service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth') 
@Controller('auth')
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService) {}

    @Post('login')
    public async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
        return await this.authService.login(loginUserDto); 
    }
}
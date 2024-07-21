import { LoginUserDto } from './../../users/dto/users.user.dto';
import { AuthenticationService } from './../services/authentication.service';
export declare class AuthenticationController {
    private readonly authService;
    constructor(authService: AuthenticationService);
    login(loginUserDto: LoginUserDto): Promise<any>;
}

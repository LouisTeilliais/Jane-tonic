import { JwtService } from "@nestjs/jwt";
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { LoginUserDto } from 'src/users/dto/users.user.dto';
import { UsersService } from 'src/users/services/users.service';
import { JwtPayload } from '../strategies/jwt.strategy';
export declare class AuthenticationService {
    private readonly prisma;
    private readonly jwtService;
    private readonly usersService;
    constructor(prisma: PrismaService, jwtService: JwtService, usersService: UsersService);
    login(loginUserDto: LoginUserDto): Promise<any>;
    private _createToken;
    validateUser(payload: JwtPayload): Promise<any>;
}
export interface RegistrationStatus {
    success: boolean;
    message: string;
    data?: User;
}
export interface RegistrationSeederStatus {
    success: boolean;
    message: string;
    data?: User[];
}

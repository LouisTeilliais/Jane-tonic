import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {JwtService} from "@nestjs/jwt";
import {User} from '@prisma/client'
import {hash} from "bcrypt";
import { PrismaService } from 'src/prisma.service';
import { LoginUserDto } from 'src/users/dto/users.user.dto';
import { UsersService } from 'src/users/services/users.service';
import { JwtPayload } from '../strategies/jwt.strategy';
// import {User} from "../users/user.entity";

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
    ) {}

    // async register(userDto: CreateUserDto):
    //     Promise<RegistrationStatus> {
    //     let status: RegistrationStatus = {
    //         success: true,
    //         message: "ACCOUNT_CREATE_SUCCESS",
    //     };

    //     try {
    //         status.data = await this.usersService.create(userDto);
    //     } catch (err) {
    //         status = {
    //             success: false,
    //             message: err,
    //         };
    //     }
    //     return status;
    // }

    async login(loginUserDto: LoginUserDto): Promise<any> {
        // find user in db
        try {
            // Find user in database
            const user = await this.usersService.findByLogin(loginUserDto);
    
            if (!user) {
                throw new Error('User not found');
            }
    
            // Generate and sign token
            const token = this._createToken(user);
    
            // Return token with user data
            return {
                ...token
            };
        } catch (error) {
            // Handle errors
            throw new Error(`Login failed: ${error.message}`);
        }
    }

    private _createToken({ login }): any {
        const user: JwtPayload = { login };
        const token = this.jwtService.sign(user);
        return {
            accessToken: token,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        const user = await this.usersService.findByPayload(payload);
        if (!user) {
            throw new HttpException("INVALID_TOKEN", 
               HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
}

export interface RegistrationStatus{
    success: boolean;
    message: string;
    data?: User;
}
export interface RegistrationSeederStatus {
    success: boolean;
    message: string;
    data?: User[];
}
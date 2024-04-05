import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {compare} from 'bcrypt'
import { LoginUserDto, UserDto } from '../dto/users.user.dto';
import { PrismaService } from 'src/prisma.service';
import UserEntity from 'src/_utils/user.entity';
import UserRepositoryService from './repositories/user.repository.service';


@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private readonly userRepositoryService : UserRepositoryService
    ) {
    }

    //use by auth module to login user
    async findByLogin({email, password}: LoginUserDto):  
                                   Promise<any> {
        const user = await this.prisma.admin.findFirst({
            where: {email}
        });

        if (!user) {
            throw new HttpException("invalid_credentials",  
                  HttpStatus.UNAUTHORIZED);
        }

        // compare passwords
        const areEqual = await compare(password, user.password);

        if (!areEqual) {
            throw new HttpException("invalid_credentials",
                HttpStatus.UNAUTHORIZED);
        }

        const {password: p, ...rest} = user;
        return rest;
    }

    //use by auth module to get user in database
    async findByPayload({email}: any): Promise<any> {
        return await this.prisma.admin.findFirst({
            where: {email}
        });
    }

    async createUser(userDto: UserDto): Promise<UserEntity>{
        return this.userRepositoryService.createSession({
            email: userDto.email,
            firstname: userDto.firstname,
            lastname: userDto.lastname,
            phoneNumber: userDto.phoneNumber,
            sessionId: userDto.sessionId
        })
    }

}

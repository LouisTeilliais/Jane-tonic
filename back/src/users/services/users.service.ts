import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {compare} from 'bcrypt'
import { LoginUserDto, UserDto } from '../dto/users.user.dto';
import { PrismaService } from 'src/prisma.service';
import UserEntity from 'src/_utils/user.entity';
import UserRepositoryService from './repositories/user.repository.service';
import { SessionRepositoryService } from 'src/sessions/services';
import { MailerService } from '@nestjs-modules/mailer';


@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private readonly userRepositoryService : UserRepositoryService,
        private readonly sessionRepositoryService : SessionRepositoryService,
        private readonly mailerService: MailerService,
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

    async findByPayload({email}: any): Promise<any> {
        return await this.prisma.admin.findFirst({
            where: {email}
        });
    }

    async createUser(userDto: UserDto): Promise<UserEntity>{
        const session = await this.sessionRepositoryService.findById(userDto.sessionId)


        if (session.isFull) {
            throw new NotFoundException("La session est complète")
        }

        await this.sessionRepositoryService.updateSessionMember(userDto.sessionId, {
            numberUserReserved: session.numberUserReserved + 1,
            isFull: session.numberUserMax === (session.numberUserReserved + 1)
        });


        await this.mailerService.sendMail({
            to: userDto.email,
            subject: '[Jane Tonic] Confirmation réservation',
            text: `Votre séance avec Jane Tonic du ${session.date} a bien été reservée !`
        })

        return this.userRepositoryService.createSession({
            email: userDto.email,
            firstname: userDto.firstname,
            lastname: userDto.lastname,
            phoneNumber: userDto.phoneNumber,
            sessionId: userDto.sessionId
        })
    }

}

import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import UserEntity from "src/_utils/user.entity";
import { PrismaService } from "src/prisma.service";


@Injectable()
export default class UserRepositoryService {

    private readonly include: Prisma.UserInclude = {
        session: true
    }

    constructor( 
        private prismaService : PrismaService
    ) {}

    /**
     * Get all users
     */
    public findAllSessions(): Promise<Array<UserEntity>>{
        return this.prismaService.user.findMany()
    }

    /**
     * Create a session
     * @param userData 
     */
    public createSession(userData: Pick<UserEntity, 'email' | 'firstname' | 'lastname' | 'phoneNumber' | 'sessionId'>): Promise<UserEntity>{
        return this.prismaService.user.create({
            data: {
                email: userData.email,
                firstname: userData.firstname,
                lastname: userData.lastname,
                phoneNumber: userData.phoneNumber,
                sessionId: userData.sessionId
            },
            include: this.include
        })
    }
}
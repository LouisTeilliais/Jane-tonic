import { Injectable } from "@nestjs/common";
import SessionEntity from "src/_utils/session.entity";
import { PrismaService } from "src/prisma.service";


@Injectable()
export default class SessionRepositoryService {

    constructor( 
        private prismaService : PrismaService
    ) {}

    
    public findAllSessions(): Promise<Array<SessionEntity>>{
        return this.prismaService.sessions.findMany()
    }


    public findById(sessionId: SessionEntity['sessionId']): Promise<SessionEntity> {
        return this.prismaService.sessions.findFirst({
            where: {
                sessionId
            }
        })
    }

    public createSession(sessionData : Pick<SessionEntity, 'place' | 'level' | 'hour' | 'type' | 'date' | 'numberUserMax'> ): Promise<SessionEntity>{
        return this.prismaService.sessions.create({
            data: {
                place: sessionData.place,
                level: sessionData.level,
                hour: sessionData.hour,
                type: sessionData.type,
                date: sessionData.date,
                numberUserMax: sessionData.numberUserMax,
            } 
        })
    }
}
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import SessionEntity from "src/_utils/session.entity";
import { PrismaService } from "src/prisma.service";


@Injectable()
export default class SessionRepositoryService {

    private readonly include: Prisma.SessionInclude = {
        sessionType: true,
        users: true
    }

    constructor( 
        private prismaService : PrismaService
    ) {}

    /**
     * Get all sessions
     */
    public findAllSessions(): Promise<Array<SessionEntity>>{
        return this.prismaService.session.findMany({
            include: this.include
        })
    }

    /**
     * Get all upcoming sessions, starting from the current date.
     */
    public findIncomingSessions(): Promise<Array<SessionEntity>> {
        const currentDate = new Date(); 

        const startOfDay = new Date(currentDate);
        startOfDay.setHours(0,0,0,0);

        return this.prismaService.session.findMany({
            where: {
                date: {
                    gte: startOfDay,
                }
            },
            orderBy: {
                date: 'asc'
            },
            include: this.include 
        });
    }

    
    /**
     * Get session by Id
     * @param sessionId 
     */
    public findById(sessionId: SessionEntity['sessionId']): Promise<SessionEntity> {
        return this.prismaService.session.findFirst({
            where: {
                sessionId
            },
            include: this.include
        })
    }

    /**
     * Create a session
     * @param sessionData 
     */
    public createSession(sessionData: Pick<SessionEntity, 'place' | 'level' | 'hour'  | 'sessionTypeId' | 'date' | 'numberUserMax'>): Promise<SessionEntity>{
        return this.prismaService.session.create({
            data: {
                place: sessionData.place,
                level: sessionData.level,
                hour: sessionData.hour,
                date: sessionData.date,
                numberUserMax: sessionData.numberUserMax,
                sessionType: sessionData.sessionTypeId ? { connect: { sessionTypeId: sessionData.sessionTypeId}} : undefined
            },
            include: this.include
        })
    }

    /**
     * Update a session 
     * @param sessionId 
     * @param sessionData 
     */
    public async updateSession(
        sessionId: SessionEntity['sessionId'],
        sessionData : Pick<SessionEntity, 'place' | 'level' | 'hour'  | 'sessionTypeId' | 'date' | 'numberUserMax'> 
    )  : Promise<SessionEntity> {
        const session = await this.findById(sessionId)

        if (!session) {
            return null
        }

        return this.prismaService.session.update({
            where: {
                sessionId
            },  
            data: {
                place: sessionData.place,
                level: sessionData.level,
                hour: sessionData.hour,
                date: sessionData.date,
                numberUserMax: sessionData.numberUserMax,
                sessionType: sessionData.sessionTypeId ? { connect: { sessionTypeId: sessionData.sessionTypeId}} : undefined
            } 
        })
    }

     /**
     * Update a session 
     * @param sessionId 
     * @param sessionData 
     */
     public async updateSessionMember(
        sessionId: SessionEntity['sessionId'],
        sessionData : Pick<SessionEntity, 'numberUserReserved' | 'isFull' > 
    )  : Promise<SessionEntity> {
        const session = await this.findById(sessionId)

        if (!session) {
            return null
        }

        return this.prismaService.session.update({
            where: {
                sessionId
            },  
            data: {
                numberUserReserved: sessionData.numberUserReserved,
                isFull: sessionData.isFull
            } 
        })
    }


    /**
     * Delete session
     * @param sessionId 
     * @returns 
     */
    public async deleteSession(sessionId: number): Promise<SessionEntity> {
        const session = await this.findById(sessionId);

        if (!session) {
            return null;
        }

        await this.prismaService.user.updateMany({
            where: {
                sessionId
            },
            data: {
                sessionId: null
            }
        });

        return this.prismaService.session.delete({
            where: {
                sessionId
            }
        });
    }
}
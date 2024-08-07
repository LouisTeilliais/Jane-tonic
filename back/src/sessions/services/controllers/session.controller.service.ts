import { Injectable, NotFoundException } from "@nestjs/common";
import SessionRepositoryService from "../repositories/session.repository.service";
import { SessionDto } from "src/sessions/models/dto/session.dto";
import SessionEntity from "src/_utils/session.entity";

@Injectable()
export default class SessionControllerService {
    constructor(private readonly sessionRepositoryService: SessionRepositoryService) {}

    async getAllSession() : Promise<SessionEntity[]>{
        const sessions = await this.sessionRepositoryService.findAllSessions();
        
        return sessions   
    }

    async getIncomingSessions() : Promise<SessionEntity[]>{
        const sessions = await this.sessionRepositoryService.findIncomingSessions();
        
        return sessions   
    }

    async getSessionById(sessionId: number) : Promise<SessionEntity>{
        const session = await this.sessionRepositoryService.findById(sessionId)
        
        return session
    }

    async createSession(sessionDto: SessionDto ) : Promise<SessionEntity>{
        return this.sessionRepositoryService.createSession({
            place: sessionDto.place,
            date: sessionDto.date,
            hour: sessionDto.hour,
            level: sessionDto.level,
            numberUserMax: sessionDto.numberUserMax,
            sessionTypeId: sessionDto.sessionTypeId
        })
    }

    async updateSession(
        sessionId: number,
        sessionDto: SessionDto
    ) : Promise<SessionEntity>{
        const session = await this.sessionRepositoryService.findById(sessionId)

        if (!session) {
            throw new NotFoundException("La session n'a pas été trouvé")
        }

        return this.sessionRepositoryService.updateSession(sessionId, {
            place: sessionDto.place,
            date: sessionDto.date,
            hour: sessionDto.hour,
            level: sessionDto.level,
            numberUserMax: sessionDto.numberUserMax,
            sessionTypeId: sessionDto.sessionTypeId
        })
    }

    async deleteSession(
        sessionId: number
    ) : Promise<SessionEntity> {    
        const session = await this.sessionRepositoryService.findById(sessionId)

        if (!session) {
            throw new NotFoundException("La session n'a pas été trouvé")
        }

        return this.sessionRepositoryService.deleteSession(sessionId)

    }
}

import SessionRepositoryService from "../repositories/session.repository.service";
import { SessionDto } from "src/sessions/models/dto/session.dto";
import SessionEntity from "src/_utils/session.entity";
export default class SessionControllerService {
    private readonly sessionRepositoryService;
    constructor(sessionRepositoryService: SessionRepositoryService);
    getAllSession(): Promise<SessionEntity[]>;
    getSessionById(sessionId: number): Promise<SessionEntity>;
    createSession(sessionDto: SessionDto): Promise<SessionEntity>;
    updateSession(sessionId: number, sessionDto: SessionDto): Promise<SessionEntity>;
    deleteSession(sessionId: number): Promise<SessionEntity>;
}

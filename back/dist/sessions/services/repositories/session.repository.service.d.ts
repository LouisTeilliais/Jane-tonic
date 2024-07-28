import SessionEntity from "src/_utils/session.entity";
import { PrismaService } from "src/prisma.service";
export default class SessionRepositoryService {
    private prismaService;
    private readonly include;
    constructor(prismaService: PrismaService);
    findAllSessions(): Promise<Array<SessionEntity>>;
    findIncomingSessions(): Promise<Array<SessionEntity>>;
    findById(sessionId: SessionEntity['sessionId']): Promise<SessionEntity>;
    createSession(sessionData: Pick<SessionEntity, 'place' | 'level' | 'hour' | 'sessionTypeId' | 'date' | 'numberUserMax'>): Promise<SessionEntity>;
    updateSession(sessionId: SessionEntity['sessionId'], sessionData: Pick<SessionEntity, 'place' | 'level' | 'hour' | 'sessionTypeId' | 'date' | 'numberUserMax'>): Promise<SessionEntity>;
    updateSessionMember(sessionId: SessionEntity['sessionId'], sessionData: Pick<SessionEntity, 'numberUserReserved' | 'isFull'>): Promise<SessionEntity>;
    deleteSession(sessionId: SessionEntity['sessionId']): Promise<SessionEntity>;
}

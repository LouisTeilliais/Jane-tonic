import SessionEntity from "src/_utils/session.entity";
import { PrismaService } from "src/prisma.service";
export default class SessionRepositoryService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAllSessions(): Promise<Array<SessionEntity>>;
    findById(sessionId: SessionEntity['sessionId']): Promise<SessionEntity>;
    createSession(sessionData: Pick<SessionEntity, 'place' | 'level' | 'hour' | 'type' | 'date' | 'numberUserMax'>): Promise<SessionEntity>;
}

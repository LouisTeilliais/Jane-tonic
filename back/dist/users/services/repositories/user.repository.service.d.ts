import UserEntity from "src/_utils/user.entity";
import { PrismaService } from "src/prisma.service";
export default class UserRepositoryService {
    private prismaService;
    private readonly include;
    constructor(prismaService: PrismaService);
    findAllSessions(): Promise<Array<UserEntity>>;
    createSession(userData: Pick<UserEntity, 'email' | 'firstname' | 'lastname' | 'phoneNumber' | 'sessionId'>): Promise<UserEntity>;
}

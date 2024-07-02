import SessionTypeEntity from "src/_utils/sessionType.entity";
import { PrismaService } from "src/prisma.service";
export default class ParamRepositoryService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Array<SessionTypeEntity>>;
}

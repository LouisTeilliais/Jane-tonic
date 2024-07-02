import { Injectable } from "@nestjs/common";
import SessionTypeEntity from "src/_utils/sessionType.entity";
import { PrismaService } from "src/prisma.service";


@Injectable()
export default class ParamRepositoryService {

    constructor( 
        private prismaService : PrismaService
    ) {}

    /**
     * Get all params
     */
    public getAll(): Promise<Array<SessionTypeEntity>>{
        return this.prismaService.sessionType.findMany({orderBy: {sessionTypeId: 'asc'}});
    }
}
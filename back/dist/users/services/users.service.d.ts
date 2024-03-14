import { LoginUserDto, UpdatePasswordDto } from '../dto/users.user.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    updatePassword(payload: UpdatePasswordDto, id: number): Promise<User>;
    findByLogin({ email, password }: LoginUserDto): Promise<any>;
    findByPayload({ email }: any): Promise<any>;
}

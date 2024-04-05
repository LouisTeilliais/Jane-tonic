import { LoginUserDto, UserDto } from '../dto/users.user.dto';
import { PrismaService } from 'src/prisma.service';
import UserEntity from 'src/_utils/user.entity';
import UserRepositoryService from './repositories/user.repository.service';
export declare class UsersService {
    private prisma;
    private readonly userRepositoryService;
    constructor(prisma: PrismaService, userRepositoryService: UserRepositoryService);
    findByLogin({ email, password }: LoginUserDto): Promise<any>;
    findByPayload({ email }: any): Promise<any>;
    createUser(userDto: UserDto): Promise<UserEntity>;
}

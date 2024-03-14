import { UsersService } from '../services/users.service';
import { UpdatePasswordDto } from '../dto/users.user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    updatePassword(req: any, updatePasswordDto: UpdatePasswordDto): Promise<{
        message: string;
    }>;
}

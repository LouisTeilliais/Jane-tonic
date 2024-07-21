import { UsersService } from '../services/users.service';
import { UserDto } from '../dto/users.user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(userDto: UserDto): Promise<import("src/_utils/user.entity").default>;
}

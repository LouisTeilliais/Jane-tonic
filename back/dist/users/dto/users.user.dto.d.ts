export declare class LoginUserDto {
    readonly email: string;
    readonly password: string;
}
export declare class CreateUserDto {
    name: string;
    surname: string;
    email: string;
    password: string;
}
export declare class UpdatePasswordDto {
    new_password: string;
    old_password: string;
}

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
    newPassword: string;
    oldPassword: string;
}

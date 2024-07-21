export declare class LoginUserDto {
    readonly email: string;
    readonly password: string;
}
export declare class UserDto {
    lastname: string;
    firstname: string;
    email: string;
    phoneNumber: string;
    sessionId: number;
}
export declare class UpdatePasswordDto {
    newPassword: string;
    oldPassword: string;
}

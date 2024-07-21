import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";
export class LoginUserDto {
    @ApiProperty()
    @IsNotEmpty() readonly email: string;

    @ApiProperty()
    @IsNotEmpty() readonly password: string;
}
export class UserDto {
    
    @IsNotEmpty()
    @ApiProperty() lastname: string;

    @IsNotEmpty()
    @ApiProperty() firstname: string;
    
    @IsNotEmpty()
    @ApiProperty() email: string;

    @ApiProperty()
    @IsNotEmpty() phoneNumber: string;

    @ApiProperty()
    @IsNotEmpty() sessionId: number;
}

export class UpdatePasswordDto {

    @IsNotEmpty()
    @ApiProperty() newPassword: string;

    @IsNotEmpty()
    @ApiProperty() oldPassword: string;

}
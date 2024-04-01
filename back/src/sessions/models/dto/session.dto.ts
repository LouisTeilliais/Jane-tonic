import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class SessionDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    place: string 

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    level: string 

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type: string 

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    date: Date 

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    hour: string

    @ApiProperty()
    @IsNumber()
    numberUserMax: number 
}
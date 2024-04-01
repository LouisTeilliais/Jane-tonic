import { ApiProperty } from "@nestjs/swagger";
import BaseEntity from "./base.entity";


export default class SessionEntity extends BaseEntity {

    @ApiProperty()
    sessionId: number

    @ApiProperty()
    place: string

    @ApiProperty()
    level: string

    @ApiProperty()
    type: string

    @ApiProperty()
    date: Date

    @ApiProperty()
    hour: string

    @ApiProperty()
    numberUserMax: number 

    @ApiProperty()
    numberUserReserved?: number

    @ApiProperty()
    isFull: boolean

}

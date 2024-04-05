import { ApiProperty } from "@nestjs/swagger";
import BaseEntity from "./base.entity";
import SessionTypeEntity from "./sessionType.entity";


export default class SessionEntity extends BaseEntity {

    @ApiProperty()
    sessionId: number

    @ApiProperty()
    place: string

    @ApiProperty()
    level: string

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

    @ApiProperty()
    sessionTypeId!: number
    
    @ApiProperty({ type: () => SessionTypeEntity })
    sessionType?: SessionTypeEntity 
}

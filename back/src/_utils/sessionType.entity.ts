import { ApiProperty } from "@nestjs/swagger";


export default class SessionTypeEntity {

    @ApiProperty()
    sessionTypeId: number

    @ApiProperty()
    sessionType : string
}

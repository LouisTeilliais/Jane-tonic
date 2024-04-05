import { ApiProperty } from "@nestjs/swagger";
import BaseEntity from "./base.entity";
import SessionEntity from "./session.entity";


export default class UserEntity extends BaseEntity {
  @ApiProperty()
  userId: number
  
  @ApiProperty()
  firstname : string 
  
  @ApiProperty()
  lastname: string
  
  @ApiProperty()
  email: string 
  
  @ApiProperty()
  phoneNumber: string 

  @ApiProperty()
  sessionId!: number
  
  @ApiProperty({ type: () => SessionEntity })
  session?: SessionEntity 
}
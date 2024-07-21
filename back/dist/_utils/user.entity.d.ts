import BaseEntity from "./base.entity";
import SessionEntity from "./session.entity";
export default class UserEntity extends BaseEntity {
    userId: number;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    sessionId: number;
    session?: SessionEntity;
}

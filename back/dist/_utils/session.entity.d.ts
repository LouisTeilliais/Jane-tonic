import BaseEntity from "./base.entity";
import SessionTypeEntity from "./sessionType.entity";
export default class SessionEntity extends BaseEntity {
    sessionId: number;
    place: string;
    level: string;
    date: Date;
    hour: string;
    numberUserMax: number;
    numberUserReserved?: number;
    isFull: boolean;
    sessionTypeId: number;
    sessionType?: SessionTypeEntity;
}

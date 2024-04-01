import BaseEntity from "./base.entity";
export default class SessionEntity extends BaseEntity {
    sessionId: number;
    place: string;
    level: string;
    type: string;
    date: Date;
    hour: string;
    numberUserMax: number;
    numberUserReserved?: number;
    isFull: boolean;
}

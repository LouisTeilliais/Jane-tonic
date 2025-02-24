export interface User {
    email: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
}

// Interface Session
export interface Session {
    sessionId: number;
    createdAt: Date;
    date: Date ;
    hour: string;
    isFull: boolean;
    level: string;
    numberUserMax: number;
    numberUserReserved: number;
    place: string;
    updatedAt: string;
    sessionTypeId: number;

    sessionType: {
        sessionTypeId: number;
        sessionType: string;
    };
    users: User[];
}
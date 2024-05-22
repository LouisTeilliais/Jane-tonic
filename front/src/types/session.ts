export interface Session {
    createdAt: string;
    date: string;
    hour: string;
    isFull: boolean;
    level: string;
    numberUserMax: number;
    numberUserReserved: number;
    place: string;
    sessionId: number;
    updatedAt: string;
    sessionType : {
        sessionTypeId: number;
        sessionType: string;
    }
  }
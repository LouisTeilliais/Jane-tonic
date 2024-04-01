import { SessionControllerService } from "../services";
import { SessionDto } from "../models/dto/session.dto";
export declare class SessionController {
    private readonly sessionControllerService;
    constructor(sessionControllerService: SessionControllerService);
    getAllProjects(): Promise<import("src/_utils/session.entity").default[]>;
    getOneSession(sessionId: number): Promise<import("src/_utils/session.entity").default>;
    postProject(sessionDto: SessionDto): Promise<import("src/_utils/session.entity").default>;
}

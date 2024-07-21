import ParamsControllerService from "../services/controllers/params.controller.service";
export declare class ParamsController {
    private readonly paramsControllerService;
    constructor(paramsControllerService: ParamsControllerService);
    getAllParams(): Promise<{
        params: {
            sessionTypes: import("src/_utils/sessionType.entity").default[];
        };
    }>;
}

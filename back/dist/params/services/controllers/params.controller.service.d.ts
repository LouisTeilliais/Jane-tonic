import ParamRepositoryService from '../repositories/params.repository.service';
export default class ParamsControllerService {
    private readonly paramRepositoryService;
    constructor(paramRepositoryService: ParamRepositoryService);
    getAllParams(): Promise<{
        params: {
            sessionTypes: import("src/_utils/sessionType.entity").default[];
        };
    }>;
}

import { Injectable } from '@nestjs/common';
import ParamRepositoryService from '../repositories/params.repository.service';

@Injectable()
export default class ParamsControllerService {

    constructor(private readonly paramRepositoryService: ParamRepositoryService) {}

    async getAllParams() {
        const sessionTypes = await this.paramRepositoryService.getAll();

        return {
            params: {
                sessionTypes: sessionTypes
            }
        };
    }
}

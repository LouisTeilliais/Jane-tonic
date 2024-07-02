import { Test } from '@nestjs/testing'
import type { TestingModule } from '@nestjs/testing'
import ParamsControllerService from './params.controller.service'

describe('ParamsControllerService', () => {
    let service: ParamsControllerService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ParamsControllerService],
        }).compile()

        service = module.get<ParamsControllerService>(ParamsControllerService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})

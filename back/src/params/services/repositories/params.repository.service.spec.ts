import { Test } from '@nestjs/testing'
import type { TestingModule } from '@nestjs/testing'
import ParamRepositoryService from './params.repository.service'

describe('ParamRepositoryService', () => {
    let service: ParamRepositoryService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ParamRepositoryService],
        }).compile()

        service = module.get<ParamRepositoryService>(ParamRepositoryService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})

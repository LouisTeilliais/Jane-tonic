import { Test } from '@nestjs/testing'
import type { TestingModule } from '@nestjs/testing'
import SessionControllerService from './session.controller.service'

describe('SessionControllerService', () => {
    let service: SessionControllerService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SessionControllerService],
        }).compile()

        service = module.get<SessionControllerService>(SessionControllerService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})

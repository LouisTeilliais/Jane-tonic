import { Test } from '@nestjs/testing'
import type { TestingModule } from '@nestjs/testing'
import SessionController from './session.controller'
import { SessionControllerService } from '../services'

describe('SessionController', () => {
    let controller: SessionController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SessionController],
            providers: [SessionControllerService],
        }).compile()

        controller = module.get<SessionController>(SessionController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})

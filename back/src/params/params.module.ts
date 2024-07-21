import { AuthenticationModule } from './../authentication/authentication.module';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ParamsController } from './controller/params.controller';
import ParamsControllerService from './services/controllers/params.controller.service';
import ParamRepositoryService from './services/repositories/params.repository.service';


@Module({
  imports: [AuthenticationModule],
  controllers: [ParamsController],
  providers: [ParamsControllerService, ParamRepositoryService, PrismaService],
  exports: [],
})
export default class ParamsModule {}

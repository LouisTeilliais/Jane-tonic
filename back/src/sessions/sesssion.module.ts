import { AuthenticationModule } from './../authentication/authentication.module';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SessionControllerService, SessionRepositoryService } from './services';
import { SessionController } from './controller';

@Module({
  imports: [AuthenticationModule],
  controllers: [SessionController],
  providers: [SessionControllerService, SessionRepositoryService, PrismaService],
  exports: [],
})
export default class SessionModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { PrismaService } from 'src/prisma.service';
import { UsersController } from './controller/users.controllers';
import UserRepositoryService from './services/repositories/user.repository.service';
import { SessionRepositoryService } from 'src/sessions/services';

@Module({
  imports: [],
  exports: [],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UserRepositoryService, SessionRepositoryService]
})
export class UsersModule {}

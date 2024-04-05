import { Module } from '@nestjs/common';
import { AuthenticationService } from './services/authentication.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from './controller/auth.controller';
import { UsersService } from 'src/users/services/users.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaService } from 'src/prisma.service';
import UserRepositoryService from 'src/users/services/repositories/user.repository.service';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: process.env.EXPIRESIN,
      },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, UsersService, JwtStrategy, PrismaService, UserRepositoryService],
  exports: [
    PassportModule,
    JwtModule
  ],
})
export class AuthenticationModule {}

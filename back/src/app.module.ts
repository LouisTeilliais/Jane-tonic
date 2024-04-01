import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import SessionModule from './sessions/sesssion.module';


@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }),
    AuthenticationModule,
    UsersModule,
    SessionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

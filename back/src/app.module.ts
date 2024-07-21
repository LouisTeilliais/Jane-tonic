import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import de ConfigService
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { MailerModule } from '@nestjs-modules/mailer';
import SessionModule from './sessions/sesssion.module';
import ParamsModule from './params/params.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    // MailerModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     transport: {
    //       host: 'smtp.gmail.com',
    //       port: 587,
    //       secure: false,
    //       auth: {
    //         user: configService.get('MAIL_USER'),
    //         pass: configService.get('MAIL_PASSWORD')
    //     },
    //     },
    //     defaults: {
    //       from: `<${configService.get('MAIL_USER')}>`, // Votre nom et votre adresse email Gmail
    //     },
    //   }),
    //   inject: [ConfigService],
    // }),
    AuthenticationModule,
    UsersModule,
    SessionModule,
    ParamsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { CacheInterceptor, CacheModule, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './api/auth/auth.module';
import { ResumeModule } from './api/resume/resume.module';
import { HttpLoggerMiddleware } from './utils/logger/http-logger';
import { MailModule } from './utils/mail/mail.module';
import { LoggerModule } from './utils/logger/logger.module';
import { ConsoleModule } from 'nestjs-console';
import { SeedService } from './console/seed.service';
import { UsersModule } from './api/users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MulterModule } from '@nestjs/platform-express';
import { FileModule } from './utils/file/file.module';
import { SocketModule } from './utils/socket/socket.module';
import { SseModule } from './utils/sse/sse.module';
import * as multer from 'multer';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConstantsModule } from './api/constants/constants.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { OfferModule } from './api/offer/offer.module';
import { CompanyModule } from './api/company/company.module';
import { NotificationModule } from './utils/notification/notification.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    // for publish
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front'),
      exclude: ['/api*', '/public'],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public'
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'dist/front'),
    //   exclude: ['/api*', '/public'],
    // }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'dist/public'),
    //   serveRoot: '/public'
    // }),
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    CacheModule.register({
      ttl: 5, // seconds
      max: 10, // maximum number of items in cache
      isGlobal: true,
    }),
    MulterModule.register({
      // dest: './upload',
      storage: multer.memoryStorage(),
      limits: {
        fileSize: 10000000, //10MB in bytes
      }
    }),
    SocketModule,
    AuthModule,
    ResumeModule,
    MongooseModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        uri: config.get('DB_URL'),
      }),
      inject: [ConfigService],
    }),
    MailModule,
    LoggerModule,
    ConsoleModule,
    UsersModule,
    FileModule,
    SseModule,
    ConstantsModule,
    OfferModule,
    CompanyModule,
    NotificationModule
  ],
  controllers: [AppController],
  providers: [SeedService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpLoggerMiddleware)
      .forRoutes('*');

  }
}

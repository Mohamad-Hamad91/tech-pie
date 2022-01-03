import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorsInterceptor } from './utils/logger/errors.interceptor';
import { MyLogger } from './utils/logger/my-logger';
import * as helmet from 'helmet';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as compression from 'compression';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
    // logger: false
  });

  app.use(helmet());


  if (process.env.NODE_ENV !== 'production')
    app.enableCors();

  app.use(compression());


  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v'
  });

  app.setGlobalPrefix('api');

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const myLogger = app.get(MyLogger);
  // app.useLogger(myLogger);
  app.useGlobalInterceptors(app.get(ErrorsInterceptor));
  app.useGlobalPipes(new ValidationPipe({ transform: true }),);
  await app.listen(port);
  myLogger.log(`server started and listening on: ${await app.getUrl()}`);
}
bootstrap();



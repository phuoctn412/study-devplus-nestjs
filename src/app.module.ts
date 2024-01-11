import { Module } from '@nestjs/common';
import Joi from 'joi';

import { DatabaseModule } from '@config/database.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        APP_PORT: Joi.number().required(),

        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_NAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_SYNCHRONIZE: Joi.boolean().required(),
        DB_LOGGING: Joi.boolean().required(),
      }),
    }),
    DatabaseModule,
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

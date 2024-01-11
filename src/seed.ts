import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { seeder } from 'nestjs-seeder';

import { MovieSeeder } from '@seeder';
import { MovieEntity } from './entities/movies';
import { DatabaseModule } from '@config/database.module';

seeder({
  imports: [DatabaseModule, TypeOrmModule.forFeature([MovieEntity])],
  providers: [ConfigService],
}).run([MovieSeeder]);

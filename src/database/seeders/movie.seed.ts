import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seeder } from 'nestjs-seeder';
import { Repository } from 'typeorm';

import { MovieEntity } from '@entities';

@Injectable()
export class MovieSeeder implements Seeder {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async seed(): Promise<any> {
    this.drop();

    const movies = [
      {
        name: 'Spider-man: Accross the spider-verse',
        genre: 'action',
        year: 2023,
      },
      {
        name: 'Doctor Strange: In the Multiverse of Madness',
        genre: 'action',
        year: 2022,
      },
      {
        name: 'Titanic',
        genre: 'drama',
        year: 1997,
      },
      {
        name: "Harry Potter and the Philosopher's Stone",
        genre: 'fantasy',
        year: 2001,
      },
    ];
    await this.movieRepository.insert(movies);
  }
  async drop(): Promise<any> {
    return this.movieRepository.query(
      `TRUNCATE movies RESTART IDENTITY CASCADE;`,
    );
  }
}

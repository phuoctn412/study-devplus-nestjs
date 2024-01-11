import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PageMetaDto, ResponsePaginate } from '@common';
import { MovieEntity } from '@entities';
import { CreateMovieParam } from './dtos/request/create-movie.param';
import { GetMoviesQuery } from './dtos/request/get-movies.query';
import { GetMovieItemResponse } from './dtos/response/get-movie-item.response';
import { plainToClass } from 'class-transformer';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<GetMovieItemResponse>,
  ) {}

  async GetAllMovies(): Promise<GetMovieItemResponse[]> {
    const movies = await this.movieRepository.find();
    return movies;
  }

  async CreateMovie(params: CreateMovieParam): Promise<GetMovieItemResponse> {
    const newMovie = this.movieRepository.create(params);
    await this.movieRepository.save(newMovie);
    return newMovie;
  }

  async GetMovies(
    params: GetMoviesQuery,
  ): Promise<ResponsePaginate<GetMovieItemResponse>> {
    const movies = this.movieRepository
      .createQueryBuilder('movie')
      .where('movie.deletedAt IS NULL')
      .skip(params.skip)
      .take(params.take);

    if (params.name) {
      movies.andWhere('movie.name LIKE :name', { name: `%${params.name}%` });
    }

    const [result, total] = await movies.getManyAndCount();
    const movieItems = plainToClass(GetMovieItemResponse, result);

    const pageMetaDto = new PageMetaDto({
      itemCount: total,
      pageOptionsDto: params,
    });

    return new ResponsePaginate(movieItems, pageMetaDto, 'Thành công');
  }
}

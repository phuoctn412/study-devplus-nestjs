import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PageMetaDto, ResponseItem, ResponsePaginate } from '@common';
import { MovieEntity } from '@entities';
import { CreateMovieParam } from './dtos/request/create-movie.param';
import { GetMoviesQuery } from './dtos/request/get-movies.query';
import { GetMovieItemResponse } from './dtos/response/get-movie-item.response';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async GetAllMovies(): Promise<ResponseItem<GetMovieItemResponse[]>> {
    const movies: any = await this.movieRepository.find();
    return new ResponseItem(movies, 'Successfully');
  }

  async CreateMovie(params: CreateMovieParam): Promise<GetMovieItemResponse> {
    const newMovie: any = this.movieRepository.create(params);
    await this.movieRepository.save(newMovie);
    return newMovie;
  }

  async GetMovies(
    params: GetMoviesQuery,
  ): Promise<ResponsePaginate<GetMovieItemResponse>> {
    const movies: any = this.movieRepository
      .createQueryBuilder('movie')
      .where('movie.deletedAt IS NULL')
      .skip(params.skip)
      .take(params.take);

    if (params.name) {
      movies.andWhere('movie.name LIKE :name', { name: `%${params.name}%` });
    }

    const [result, total] = await movies.getManyAndCount();

    const pageMetaDto = new PageMetaDto({
      itemCount: total,
      pageOptionsDto: params,
    });

    return new ResponsePaginate(result, pageMetaDto, 'Successfully');
  }

  async GetMovieById(id: number): Promise<ResponseItem<GetMovieItemResponse>> {
    const existingMovie: any = await this.movieRepository.findOneBy({ id });
    if (!existingMovie) throw new BadRequestException('Movie not found');
    return new ResponseItem(existingMovie, 'Successfully');
  }

  async DeleteMovie(id: number): Promise<ResponseItem<string>> {
    const existingMovie = await this.movieRepository.findOneBy({
      id,
      deletedAt: null,
    });

    if (!existingMovie) throw new BadRequestException('Movie not found');

    const result = await this.movieRepository.softDelete({ id });
    if (!result.affected) throw new BadRequestException('Delete failed');

    return new ResponseItem<string>(
      `Movie: ${existingMovie.name}`,
      'Delete success',
    );
  }
}

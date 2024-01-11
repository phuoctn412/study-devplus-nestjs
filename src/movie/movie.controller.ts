import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { ResponsePaginate } from '@common';
import { CreateMovieParam } from './dtos/request/create-movie.param';
import { GetMoviesQuery } from './dtos/request/get-movies.query';
import { MovieService } from './movie.service';
import { GetMovieItemResponse } from './dtos/response/get-movie-item.response';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get('/all')
  async GetAllMovies(): Promise<GetMovieItemResponse[]> {
    const result = await this.movieService.GetAllMovies();
    return result;
  }

  @Get()
  async GetMovies(
    @Query() query: GetMoviesQuery,
  ): Promise<ResponsePaginate<GetMovieItemResponse>> {
    const result = await this.movieService.GetMovies(query);
    return result;
  }

  @Post()
  async CreateMovie(
    @Body() params: CreateMovieParam,
  ): Promise<GetMovieItemResponse> {
    const result = await this.movieService.CreateMovie(params);
    return result;
  }
}

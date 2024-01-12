import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

import { ResponseItem, ResponsePaginate } from '@common';
import { CreateMovieParam } from './dtos/request/create-movie.param';
import { GetMoviesQuery } from './dtos/request/get-movies.query';
import { MovieService } from './movie.service';
import { GetMovieItemResponse } from './dtos/response/get-movie-item.response';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get('/all')
  async GetAllMovies(): Promise<ResponseItem<GetMovieItemResponse[]>> {
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

  @Get(':id')
  async GetMovieById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseItem<GetMovieItemResponse>> {
    const result = await this.movieService.GetMovieById(id);
    return result;
  }

  @Post()
  async CreateMovie(
    @Body() params: CreateMovieParam,
  ): Promise<GetMovieItemResponse> {
    const result = await this.movieService.CreateMovie(params);
    return result;
  }

  @Delete(':id')
  async DeleteMovie(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseItem<string>> {
    return await this.movieService.DeleteMovie(id);
  }
}

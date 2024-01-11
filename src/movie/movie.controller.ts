import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get('/all')
  async GetMovies(): Promise<any> {
    const result = await this.movieService.GetMovies();
    return result;
  }
}

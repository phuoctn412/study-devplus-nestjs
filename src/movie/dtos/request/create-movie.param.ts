import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMovieParam {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  genre: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;
}

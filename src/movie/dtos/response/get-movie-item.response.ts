import { Expose } from 'class-transformer';

export class GetMovieItemResponse {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  genre: string;

  @Expose()
  year: number;

  @Expose()
  createdAt: Date;
}

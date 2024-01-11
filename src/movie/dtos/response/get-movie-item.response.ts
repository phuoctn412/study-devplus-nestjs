import { Expose, plainToClass } from 'class-transformer';

import { MovieEntity } from '@entities';

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

  static fromEntity(entity: MovieEntity): GetMovieItemResponse {
    return plainToClass(GetMovieItemResponse, entity);
  }
}

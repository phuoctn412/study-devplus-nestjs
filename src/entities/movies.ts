import { AbstractEntity } from '@config/entities/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity('movies')
export class MovieEntity extends AbstractEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  genre: string;

  @Column({ type: 'int' })
  year: number;
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../categories/category-entity';
import { MovieController } from './movie-controller';
import { MovieServices } from './movie-services';
import { Movie } from './movie-entity';
import { Genre } from 'src/genres/genre-entity';

@Module({
imports:[TypeOrmModule.forFeature([Category, Genre, Movie])],
providers: [MovieServices],
controllers: [MovieController],

})



export class MovieModule {}
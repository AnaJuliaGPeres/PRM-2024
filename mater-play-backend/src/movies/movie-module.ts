import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../categories/category-entity';
import { MovieController } from './movie-controller';
import { MovieServices } from './movie-services';
import { Movie } from './movie-entity';


@Module({
imports:[TypeOrmModule.forFeature([Category, Movie])],
providers: [MovieServices],
controllers: [MovieController],

})





export class MovieModule {}
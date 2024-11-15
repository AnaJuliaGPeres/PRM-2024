import { Module } from "@nestjs/common";
import { GenreServices } from "./genre-service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Genre } from "./genre-entity";
import { GenreController } from "./genre-controller";
import { Movie } from "src/movies/movie-entity";
import { Category } from "src/categories/category-entity";

@Module({
imports:[TypeOrmModule.forFeature([Category, Genre, Movie])],
providers: [GenreServices],
controllers: [GenreController],


})


export class GenreModule {}
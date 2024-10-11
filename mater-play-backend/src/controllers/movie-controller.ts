
import { Controller, Get, Param } from "@nestjs/common";
import { find } from "rxjs";
import { Movie } from "src/entities/movie-entity";
import { MovieServices } from "src/services/movie-services";

@Controller('movies')
export class MovieController {

    constructor(
        private service: MovieServices   
    ) { }

    @Get()

    findAll(): Promise<Movie[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Movie> {
        return this.service.findById(id);
    }
}   
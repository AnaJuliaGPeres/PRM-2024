
import { Controller, Get, HttpException, HttpStatus, Param } from "@nestjs/common";
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
    async findById(@Param('id') id: string): Promise<Movie> {

        const found = await this.service.findById(id);

        if(!found) {
            throw new HttpException ('Movie not found', HttpStatus.NOT_FOUND);
        }

        return found;
    }
}   
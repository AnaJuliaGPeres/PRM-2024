
import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Body, Patch, Delete, HttpCode, ParseUUIDPipe, Query } from "@nestjs/common";
import { find } from "rxjs";
import { Movie } from "src/entities/movie-entity";
import { MovieServices } from "src/services/movie-services";
import { Category } from "src/entities/category-entity";


@Controller('movies')
export class MovieController {

    constructor(
        private service: MovieServices   
    ) { }

    @Get()

    findAll(@Query('categoryId') categoryId?: string): Promise<Movie[]> {
        if (categoryId) {
            return this.service.findByCategory({
                id: Number (categoryId), 
            } as Category); 
        }
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


    @Post()
    create(@Body() Movie: Movie): Promise<Movie> {
       return this.service.save(Movie);

    }

    @Put(':id')
    async update(@Param('id', ParseUUIDPipe) id:string, @Body() movie: Movie,): Promise<Movie> {
        const found = await this.service.findById(id);
        if(!found) {
            throw new HttpException ('Movie not found', HttpStatus.NOT_FOUND);
        }

        movie.id = found.id;
        return this.service.save(movie);                     
    }   


    @Delete(':id')
    @HttpCode(204)
   async remove(@Param('id', ParseUUIDPipe) id:string): Promise<void> {  

        const found = await this.service.findById(id);
        if(!found) {
            throw new HttpException ('Movie not found', HttpStatus.NOT_FOUND);
        }
        return this.service.remove(id);
    

    }



}   
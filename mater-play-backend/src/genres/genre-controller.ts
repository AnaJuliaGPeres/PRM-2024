import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Body, Patch, Delete, HttpCode, ParseUUIDPipe  } from "@nestjs/common";
import { GenreServices } from "src/genres/genre-service";
import { Genre } from "src/genres/genre-entity";
 

@Controller('genres')
export class GenreController {

    constructor(
        private service: GenreServices) { }

    @Get()
    findAll(): Promise<Genre[]> {
        return this.service.findAll();

    }

    @Get(':id')
    async findById(@Param('id', new ParseIntPipe) id: string): Promise<Genre> {
        const found = await this.service.findById(id);

        console.log(found);

        if (!found) {
            throw new HttpException('Genre not found', HttpStatus.NOT_FOUND);
        }
        return found

    }

    @Post()
    create(@Body() genre: Genre): Promise<Genre> {
        return this.service.save(genre);
    }

    @Put('id')
    async update(@Param('id', ParseIntPipe) id: string, genre: Genre): Promise<Genre> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('Genre not found', HttpStatus.NOT_FOUND);
        }

        genre.id = found.id;

        return this.service.save(genre);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseIntPipe) id: string): Promise<void> {

        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('Genre not found', HttpStatus.NOT_FOUND);
        }

        return this.service.remove(id);
    }
}
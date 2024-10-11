
import { Repository } from "typeorm";
import { Movie } from "../entities/movie-entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()

export class MovieServices {

   constructor(
      @InjectRepository(Movie)
      private repository: Repository<Movie>)
      { }


   findAll(): Promise<Movie[]>{
      return this.repository.find();
   }


  findById(id: string): Promise<Movie>{

      return this.repository.findOneBy({id: id});

  }


}
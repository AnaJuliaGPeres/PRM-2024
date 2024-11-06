
import { Repository } from "typeorm";
import { Category } from "../categories/category-entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()

export class CategoryServices {

   constructor(
      @InjectRepository(Category)
      private repository: Repository<Category>)
      { }


   findAll(): Promise<Category[]>{
      return this.repository.find({
         where: {active: true, }
      });
   }


  findById(id: number): Promise<Category>{

      return this.repository.findOneBy({id: id});

  }
 
  save(category: Category): Promise<Category>{

      return this.repository.save(category);

  }


  async remove(id: number): Promise<void>{

   await  this.repository.delete(id);

}
}
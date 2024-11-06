import { Module } from "@nestjs/common";
import { CategoryServices } from "./category-service";
import { CategoryController } from "./category-controle";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./category-entity";


@Module({
imports:[TypeOrmModule.forFeature([Category])],
providers: [CategoryServices],
controllers: [CategoryController],


})



















export class CategoryModule {}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('mt-filme')
export class Movie{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    title: string;       

    @Column({type: 'text',  nullable: false})
    description: string;

    @Column({name: 'age_rating', length:2, nullable: false})
    ageRating: string;

    @Column({nullable: false})
    poster: string;

}
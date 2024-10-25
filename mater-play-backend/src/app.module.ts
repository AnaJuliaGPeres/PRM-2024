import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie-entity';
import { MovieController } from './controllers/movie-controller';
import { MovieServices } from './services/movie-services';
import { Category } from './entities/category-entity';  
import { CategoryController } from './controllers/category-controle';
import { CategoryServices } from './services/category-service';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port:Number( process.env.DB_PORT),   
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        entities:[Category,Movie],
        synchronize: true
      }),
      TypeOrmModule.forFeature([Category,Movie]),

  ],
  controllers: [CategoryController,MovieController],
  providers: [ CategoryServices,MovieServices],
})
export class AppModule {}


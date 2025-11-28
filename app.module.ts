import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Sukoon@1',
    database: 'book-crud',
    entities: [Book],
    // autoLoadEntities: true,
    synchronize: true,
    }),
  TypeOrmModule.forFeature([Book]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

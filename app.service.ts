import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookDto } from './app.controller';


@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) { }
  async getBooks(){
    return await this.bookRepository.find({
      order: {
        title: 'ASC',
      },
    });
  }

  async getBook(id: string) {
    return await this.bookRepository.findOneBy({id });
  } 

  async createBook(book: BookDto) {
    console.log('Book',book)
     await this.bookRepository.save(book);
    return await this.getBooks();
  }

  async updateBook(book: BookDto) {
    await this.bookRepository.update(book.id, book); 
    return await this.getBooks();
  }

  async deleteBook(id: string) {
     await this.bookRepository.delete(id);
    return await this.getBooks();
  }
}

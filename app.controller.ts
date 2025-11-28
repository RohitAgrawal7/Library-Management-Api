import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from './book.entity';

export class BookDto {
  title: string;
  id: string;
  genre: string;
  price: string;
  author: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('book')
  async getBooks() {
    return await this.appService.getBooks();
  }

  @Get('book/:id')
  async getBook(@Param('id') id: string) {
    return await this.appService.getBook(id);
  }

  @Post('book')
    async createBook(@Body() book: BookDto) {
    return await this.appService.createBook(book);
  }

  @Put('book/:id')
  async updateBook(@Body() book: BookDto, @Param('id') id: string) {
    return await this.appService.updateBook(book);
  }

  @Delete('book/:id')
  async deleteBook(@Param('id') id: string) {
    return await this.appService.deleteBook(id);
  }
}

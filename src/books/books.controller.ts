import { Controller, Get, Render, Param, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}
  @Get('categories')
  @Render('categories')
  getCategories(): object {
    return this.bookService.getCategories();
  }

  @Get('search')
  @Render('search')
  getSearch(@Query('search') search: string): object {
    return this.bookService.getSearch(search);
  }

  @Get('filter/:filter')
  @Render('filter')
  getFilter(@Param('filter') filter: string): object {
    return this.bookService.getFilter(filter);
  }

  @Get('resource/:resource')
  @Render('category')
  getCategory(@Param('resource') resource: string): object {
    return this.bookService.getResource(resource);
  }

  @Get(':id')
  @Render('book')
  getBook(@Param('id') id: string): object {
    return this.bookService.getBook(id);
  }
}

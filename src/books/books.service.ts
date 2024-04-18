import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schema/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async getCategories(): Promise<object> {
    try {
      const allBooks = await this.bookModel.find();
      const categories = [];
      allBooks.forEach((book) => {
        categories.push(book.category);
      });
      const reducedCategories = [...new Set(categories)];
      return { title: 'Categories', data: reducedCategories };
    } catch (error) {
      console.log(error);
    }
  }

  async getFilter(filter: string): Promise<object> {
    try {
      const resource = await this.bookModel.find({ filter });
      return { title: filter, resource };
    } catch (error) {
      console.log(error);
    }
  }

  async getSearch(search: string): Promise<object> {
    try {
      const data = await this.bookModel.find({
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { author: { $regex: search, $options: 'i' } },
        ],
      });
      if (!data) {
        throw new NotFoundException('Nothing found');
      }
      return { title: 'Search', data };
    } catch (error) {
      console.log(error);
    }
  }

  async getResource(resource: string): Promise<object> {
    try {
      const data = await this.bookModel.find({ resource });
      return { title: 'Search', resource: data };
    } catch (error) {
      console.log(error);
    }
  }

  async getBook(id: string): Promise<object> {
    try {
      const book = await this.bookModel.findById(id).exec();
      return { title: 'Search', data: book };
    } catch (error) {
      console.log(error);
    }
  }
}

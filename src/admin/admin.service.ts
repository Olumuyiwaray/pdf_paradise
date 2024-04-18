import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddBookDto } from './dto/add-book.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Book } from 'src/books/schema/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class AdminService {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    @InjectModel(Book.name) private bookModel: Model<Book>,
  ) {}
  getWelcome(): object {
    return { title: 'Welcome' };
  }
  getLogin(): object {
    return { title: 'Login' };
  }
  getAdd(): object {
    return { title: 'Add' };
  }
  getLogout(): object {
    return { title: 'Add' };
  }
  async addBook(
    addBookDto: AddBookDto,
    image: Express.Multer.File,
  ): Promise<object> {
    try {
      const imageUrl = await this.cloudinaryService.upload(image.path);
      const newBook = new this.bookModel({
        ...addBookDto,
        image_url: imageUrl.imageUrl,
      });
      await newBook.save();
      return { title: '', response: 'Book added successfully' };
    } catch (error) {
      console.log(error);
    }
  }
}

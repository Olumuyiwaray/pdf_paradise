import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from 'src/books/schema/book.schema';
import { MulterModule } from '@nestjs/platform-express';
import { MulterService } from 'src/multer/multer.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
//import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [
    MulterModule.register(new MulterService().getMulterOptions()),
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
  ],
  controllers: [AdminController],
  providers: [AdminService, CloudinaryService],
})
export class AdminModule {}

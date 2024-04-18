import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
//import { UploadModule } from './upload/upload.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { MulterService } from './multer/multer.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    BooksModule,
    AdminModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, CloudinaryService, MulterService],
})
export class AppModule {}

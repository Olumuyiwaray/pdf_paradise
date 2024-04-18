import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AddBookDto } from './dto/add-book.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('admin')
export class AdminController {
  constructor(private readonly appService: AdminService) {}

  @Get()
  @Render('welcome')
  getWelcome(): object {
    return this.appService.getWelcome();
  }

  @Get('/login')
  @Render('login')
  getLogin(): object {
    return this.appService.getLogin();
  }

  @Get('/add')
  @Render('add')
  getAdd(): object {
    return this.appService.getAdd();
  }

  @Get('/logout')
  @Redirect('/login')
  getLogout(): object {
    return this.appService.getLogout();
  }

  @Post('/add')
  @UseInterceptors(FileInterceptor('image_url'))
  async addBook(
    @UploadedFile() image: Express.Multer.File,
    @Body() addBooDto: AddBookDto,
  ): Promise<object> {
    return this.appService.addBook(addBooDto, image);
  }
}

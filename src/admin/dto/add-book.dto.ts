import { IsNotEmpty, IsString } from 'class-validator';

export class AddBookDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  author: string;
  @IsString()
  @IsNotEmpty()
  genre: string;
  @IsString()
  @IsNotEmpty()
  category: string;
  @IsString()
  @IsNotEmpty()
  year: string;
  @IsString()
  @IsNotEmpty()
  language: string;
  @IsString()
  @IsNotEmpty()
  best_seller: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}

import { Injectable } from '@nestjs/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  name: string;
  @Prop()
  author: string;
  @Prop()
  genre: string;
  @Prop()
  category: string;
  @Prop()
  year: string;
  @Prop()
  language: string;
  @Prop()
  best_seller: string;
  @Prop()
  description: string;
  @Prop()
  image_url: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);

@Injectable()
export class BookModel {
  // No explicit initialization logic needed
}

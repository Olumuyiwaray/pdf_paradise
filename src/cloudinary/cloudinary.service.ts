// cloudinary.service.ts

// user/cloudinary.service.ts

import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';
import * as fs from 'fs';

@Injectable()
export class CloudinaryService {
  constructor() {
    // Initialize Cloudinary configuration here
    this.configureCloudinary();
  }

  configureCloudinary() {
    cloudinary.v2.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
  }

  async upload(filePath: string): Promise<{ imageUrl: string }> {
    try {
      // Use cloudinary's upload method with the file path
      const result = await cloudinary.v2.uploader.upload(filePath, {
        folder: 'pdf_paradise',
        resource_type: 'image',
        format: 'png',
        allowed_formats: ['png', 'jpg'],
      });

      const imageUrl = result.secure_url;
      fs.unlink(filePath, (err) => {
        console.log(filePath);
        if (err) {
          console.log(err);
        } else {
          console.log('file deleted');
        }
      });
      return { imageUrl };
    } catch (error) {
      throw error;
    }
  }
}

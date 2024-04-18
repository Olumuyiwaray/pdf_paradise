// multer.service.ts

import { BadRequestException, Injectable } from '@nestjs/common';
import * as multer from 'multer';

@Injectable()
export class MulterService {
  getMulterOptions(): multer.Options {
    return {
      storage: multer.diskStorage({
        destination: './uploads', // Set your desired destination folder on the server
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(
            null,
            file.fieldname + '-' + uniqueSuffix + '-' + file.originalname,
          );
        },
      }),
      fileFilter: (req, file, cb) => {
        // Add any custom file filtering logic here if needed
        const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];
        if (allowedMimes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new BadRequestException('Invalid file type') as any, false);
        }
      },
      limits: {
        fileSize: 1024 * 1024 * 3, // 3 MB file size limit
      },
    };
  }
}

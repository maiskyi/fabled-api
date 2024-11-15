import { DynamicModule, Module } from '@nestjs/common';
import { v2 } from 'cloudinary';

import { CloudinaryConfig } from './cloudinary.types';
import { CloudinaryService } from './services/cloudinary';

@Module({
  providers: [CloudinaryService],
  exports: [CloudinaryService],
})
export class CloudinaryModule {
  static forRoot({
    apiKey,
    apiSecret,
    cloudName,
  }: CloudinaryConfig): DynamicModule {
    return {
      module: CloudinaryModule,
      global: true,
      providers: [
        {
          provide: 'CLOUDINARY',
          useFactory: () => {
            return v2.config({
              secure: true,
              api_key: apiKey,
              api_secret: apiSecret,
              cloud_name: cloudName,
            });
          },
        },
      ],
    };
  }
}

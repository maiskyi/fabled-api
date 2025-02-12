import { DynamicModule, Module } from '@nestjs/common';

import { AwsS3Clientservice } from './services/client';
import { ConfigService } from './services/config';
import { FabledBucketService } from './services/fabled-bucket';
import { AwsS3Config } from './aws-s3.types';

@Module({
  providers: [FabledBucketService],
  exports: [FabledBucketService],
})
export class AwsS3Module {
  static forRoot({
    accessKeyId,
    secretAccessKey,
    region,
    bucketName,
  }: AwsS3Config): DynamicModule {
    return {
      module: AwsS3Module,
      global: true,
      providers: [
        {
          provide: AwsS3Clientservice,
          useValue: new AwsS3Clientservice({
            region,
            credentials: {
              accessKeyId,
              secretAccessKey,
            },
          }),
        },
        {
          provide: ConfigService,
          useValue: new ConfigService({ bucketName }),
        },
      ],
    };
  }
}

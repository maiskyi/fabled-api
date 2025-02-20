import { Injectable } from '@nestjs/common';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import { AwsS3Clientservice } from '../client';
import { ConfigService } from '../config';

import { GetSignedUrlParams } from './fabled-bucket.types';

@Injectable()
export class FabledBucketService {
  public constructor(
    private client: AwsS3Clientservice,
    private config: ConfigService,
  ) {}

  public async getSignedUrl({ filename }: GetSignedUrlParams) {
    const command = new GetObjectCommand({
      Bucket: this.config.bucketName,
      Key: filename,
    });

    const url = await getSignedUrl(this.client, command);

    return { url };
  }
}

import { Injectable } from '@nestjs/common';
import { S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class AwsS3Clientservice extends S3Client {}

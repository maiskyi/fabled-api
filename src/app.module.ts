import { resolve } from 'path';

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
// Services
import { FirebaseModule } from '@services/firebase';
import { CloudinaryModule } from '@services/cloudinary';
import { RevenueCatModule } from '@services/revenue-cat';
import { KeystoneModule } from '@services/keystone';
import { MailerModule } from '@services/mailer';
import { TelegramModule } from '@services/telegram';
import { AwsS3Module } from '@services/aws-s3';
import { OnepAiModule } from '@services/openai';
import { StabilityAiModule } from '@services/stabilityai';
// Core
import { PrismaModule } from '@core/prisma';

import { StoriesModule } from './stories';
import { HealthCheckModule } from './health-check';
import { BootstrapModule } from './bootstarp';
import { InquiriesModule } from './inquiries';
import { FeedbacksModule } from './feedbacks';
import { SystemModule } from './system';
import { HooksModule } from './hooks';

const serviceAccount = resolve(process.cwd(), './firebase-adminsdk.json');

@Module({
  imports: [
    PrismaModule,
    CqrsModule.forRoot(),
    FirebaseModule.forRoot({
      serviceAccount,
    }),
    CloudinaryModule.forRoot({
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      rootFolder: process.env.CLOUDINARY_FOLDER_ROOT,
    }),
    RevenueCatModule.forRoot({
      apiKey: process.env.REVENUECAT_API_KEY,
      baseURL: process.env.REVENUECAT_API_HOST,
      projectId: process.env.REVENUECAT_PROJECT_ID,
      environment: process.env.ENVIRONMENT,
    }),
    KeystoneModule.forRoot({
      schemaUrl: process.env.KEYSTONE_API_HOST,
      apiKey: process.env.KEYSTONE_API_KEY,
    }),
    MailerModule.forRoot({
      email: process.env.GMAIL_EMAIL,
      password: process.env.GMAIL_PASSWORD,
      from: process.env.MAILER_FROM,
      to: process.env.MAILER_TO,
    }),
    TelegramModule.forRoot({
      token: process.env.TG_BOT_TOKEN,
      chanelId: process.env.TG_CHANEL_ID,
    }),
    AwsS3Module.forRoot({
      bucketName: process.env.AWS_S3_BUCKET_NAME,
      accessKeyId: process.env.AWS_S3_ACCESS_KEY,
      region: process.env.AWS_S3_BUCKET_REGION,
      secretAccessKey: process.env.AWS_S3_ACCESS_KEY_SECRET,
    }),
    OnepAiModule.forRoot({
      apiKey: process.env.OPENAI_API_KEY,
    }),
    StabilityAiModule.forRoot({
      apiKey: process.env.STABILITY_AI_API_KEY,
      baseURL: process.env.STABILITY_AI_API_HOST,
    }),
    // Features
    BootstrapModule,
    FeedbacksModule,
    HealthCheckModule,
    HooksModule,
    InquiriesModule,
    StoriesModule,
    SystemModule,
  ],
})
export class AppModule {}

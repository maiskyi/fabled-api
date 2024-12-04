import { resolve } from 'path';

import { Module } from '@nestjs/common';
import { FirebaseModule } from '@services/firebase';
import { PrismaModule } from '@core/prisma';
import { CloudinaryModule } from '@services/cloudinary';
import { RevenueCatModule } from '@services/revenue-cat';
import { KeystoneModule } from '@services/keystone';
import { MailerModule } from '@services/mailer';

import { StoriesModule } from './stories';
import { HealthCheckModule } from './health-check';
import { BootstrapModule } from './bootstarp';
import { InquiriesModule } from './inquiries';
import { FeedbacksModule } from './feedbacks';
import { SystemModule } from './system';

const serviceAccount = resolve(process.cwd(), './firebase-adminsdk.json');

@Module({
  imports: [
    PrismaModule,
    FirebaseModule.forRoot({
      serviceAccount,
    }),
    CloudinaryModule.forRoot({
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
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
    SystemModule,
    BootstrapModule,
    HealthCheckModule,
    StoriesModule,
    InquiriesModule,
    FeedbacksModule,
  ],
})
export class AppModule {}

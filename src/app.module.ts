import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { FirebaseModule } from '@services/firebase';
import { PrismaModule } from '@core/prisma';
import { StoriesModule } from './stories';

const serviceAccount = resolve(process.cwd(), './firebase-adminsdk.json');

@Module({
  imports: [
    PrismaModule,
    FirebaseModule.forRoot({
      serviceAccount,
    }),
    StoriesModule,
  ],
})
export class AppModule {}

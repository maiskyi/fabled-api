import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { FirebaseModule } from '@services/firebase';
import { StoriesModule } from './stories';

const serviceAccount = resolve(process.cwd(), './firebase-adminsdk.json');

@Module({
  imports: [
    FirebaseModule.forRoot({
      serviceAccount,
    }),
    StoriesModule,
  ],
})
export class AppModule {}

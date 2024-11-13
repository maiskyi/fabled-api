import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FirebaseModule } from '@services/firebase';
import { StoriesModule } from './stories';

@Module({
  imports: [FirebaseModule, StoriesModule],
  providers: [AppService],
})
export class AppModule {}

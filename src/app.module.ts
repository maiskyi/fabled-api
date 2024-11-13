import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from '@services/firebase';

@Module({
  imports: [FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

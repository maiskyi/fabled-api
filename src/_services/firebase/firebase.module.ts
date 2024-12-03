import { DynamicModule, Module } from '@nestjs/common';
import { initializeApp, cert } from 'firebase-admin/app';

import { FIREBASE_APP } from './firebase.const';
import { FirebaseConfig } from './firebase.types';
import { AuthService } from './services/auth';

@Module({
  providers: [AuthService],
  exports: [AuthService],
})
export class FirebaseModule {
  static forRoot({ serviceAccount }: FirebaseConfig): DynamicModule {
    return {
      module: FirebaseModule,
      global: true,
      providers: [
        {
          provide: FIREBASE_APP,
          useFactory: () => {
            return initializeApp({
              credential: cert(JSON.parse(serviceAccount)),
            });
          },
        },
      ],
    };
  }
}

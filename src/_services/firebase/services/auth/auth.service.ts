import { Injectable } from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class AuthService {
  public async verifyIdToken(token: string) {
    const decodedToken = await getAuth().verifyIdToken(token);

    return decodedToken;
  }
}

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../../services/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(private auth: AuthService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      const decodedToken = await this.auth.verifyIdToken(token);
      request.user = decodedToken;
      return true;
    } catch (error) {
      throw new UnauthorizedException(error);
    }

    return true;
  }

  private extractTokenFromHeader(request: any): string | null {
    const authorization = request.headers['authorization'];
    if (authorization && authorization.startsWith('Bearer ')) {
      return authorization.split('Bearer ')[1];
    }
    return null;
  }
}

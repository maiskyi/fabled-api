import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '@core/prisma';
import { UserInfo } from 'firebase-admin/auth';

@Injectable()
export class CreateStoryGuard implements CanActivate {
  public constructor(private prisma: PrismaService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const {
      user: { uid },
    } = context.switchToHttp().getRequest<{ user: UserInfo }>();

    const successCount = this.prisma.story.count({
      where: {
        firebaseUserId: {
          equals: uid,
        },
        status: {
          equals: 'success',
        },
      },
    });

    const inProgressCount = this.prisma.story.count({
      where: {
        firebaseUserId: {
          equals: uid,
        },
        status: {
          equals: 'inprogress',
        },
      },
    });

    const [success, inProgress] = await Promise.all([
      successCount,
      inProgressCount,
    ]);

    if (inProgress > 0) {
      throw new HttpException(
        'Service is temporarily unavailable',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    return success < 3;
  }
}

import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '@core/prisma';
import { get } from 'lodash';

@Injectable()
export class CreateStoryGuard implements CanActivate {
  public constructor(private prisma: PrismaService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const firebaseUserId = get(request, ['user', 'uid']);

    const deviceId = get(request, ['headers', 'device-id']);

    const successCount = this.prisma.story.count({
      where: {
        OR: [
          {
            firebaseUserId,
            status: 'success',
          },
          {
            deviceId,
            status: 'success',
          },
        ],
      },
    });

    const inProgressCount = this.prisma.story.count({
      where: {
        OR: [
          {
            firebaseUserId,
            status: 'inprogress',
          },
          {
            deviceId,
            status: 'inprogress',
          },
        ],
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

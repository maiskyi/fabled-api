import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PrismaService } from '@core/prisma';
import { UserInfo } from 'firebase-admin/auth';

@Injectable()
export class CreateStoryGuard implements CanActivate {
  public constructor(private prisma: PrismaService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const { user } = context.switchToHttp().getRequest<{ user: UserInfo }>();

    console.log(user);

    return true;
  }
}

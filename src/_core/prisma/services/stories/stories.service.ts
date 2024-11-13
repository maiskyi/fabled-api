import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma';

@Injectable()
export class StoriesService {
  public constructor(private prisma: PrismaService) {}

  public async findMany() {
    const total = await this.prisma.story.count();

    const data = await this.prisma.story.findMany();

    return { data, total };
  }
}

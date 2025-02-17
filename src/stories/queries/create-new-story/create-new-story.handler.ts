import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '@core/prisma';

import { CreateNewStoryQuery } from './create-new-story.query';

@QueryHandler(CreateNewStoryQuery)
export class CreateNewStoryHandler
  implements IQueryHandler<CreateNewStoryQuery>
{
  constructor(private prisma: PrismaService) {}

  async execute({ story: data }: CreateNewStoryQuery) {
    return this.prisma.story.create({
      data,
      select: {
        id: true,
      },
    });
  }
}

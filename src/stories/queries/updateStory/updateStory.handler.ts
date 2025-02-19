import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '@core/prisma';

import { UpdateStoryQuery } from './updateStory.query';

@QueryHandler(UpdateStoryQuery)
export class UpdateStoryHandler implements IQueryHandler<UpdateStoryQuery> {
  constructor(private prisma: PrismaService) {}

  async execute({ story }: UpdateStoryQuery) {
    const { id, ...data } = story;

    await this.prisma.story.update({
      where: { id },
      data,
    });
  }
}

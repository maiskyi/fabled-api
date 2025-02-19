import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '@core/prisma';
import { castArray } from 'lodash';

import { UpdateStoryStatusQuery } from './updateStoryStatus.query';

@QueryHandler(UpdateStoryStatusQuery)
export class UpdateStoryStatusHandler
  implements IQueryHandler<UpdateStoryStatusQuery>
{
  constructor(private prisma: PrismaService) {}

  async execute({ query }: UpdateStoryStatusQuery) {
    const { id, log, status } = query;

    const { statusLog } = await this.prisma.story.findUnique({
      where: { id },
      select: { statusLog: true },
    });

    return this.prisma.story.update({
      where: { id },
      data: {
        status,
        statusLog: [...castArray(statusLog), log],
      },
      select: { statusLog: true, contentPrompt: true },
    });
  }
}

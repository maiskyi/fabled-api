import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '@core/prisma';
import { castArray } from 'lodash';

import { AddStatusToStoryLogQuery } from './addStatusToStoryLog.query';

@QueryHandler(AddStatusToStoryLogQuery)
export class AddStatusToStoryLogHandler
  implements IQueryHandler<AddStatusToStoryLogQuery>
{
  constructor(private prisma: PrismaService) {}

  async execute({ query: data }: AddStatusToStoryLogQuery) {
    const { id, statusLog: update } = data;

    const { statusLog } = await this.prisma.story.findUnique({
      where: { id },
      select: { statusLog: true },
    });

    return this.prisma.story.update({
      where: { id },
      data: {
        statusLog: [...castArray(statusLog), ...update],
      },
      select: { statusLog: true, contentPrompt: true },
    });
  }
}

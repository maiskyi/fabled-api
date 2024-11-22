import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { get } from 'lodash';

export const Language = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const language = get(request, ['headers', 'language'], null);

    if (!language) {
      throw new BadRequestException(`Missing required header: Language`);
    }

    return language;
  },
);

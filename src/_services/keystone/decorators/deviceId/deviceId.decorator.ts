import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { get } from 'lodash';

export const DeviceId = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();

    return get(request, ['headers', 'device-id']);
  },
);

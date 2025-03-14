import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { get } from 'lodash';

import { CustomerService } from '../../services/customer';
import { ConfigService } from '../../services/config';

import { ACTIVE_SUBSCRIPTION_STATUSES } from './has-active-subscription.const';

@Injectable()
export class HasActiveSubscription implements CanActivate {
  public constructor(
    private customer: CustomerService,
    private config: ConfigService,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const customerId = get(request, ['headers', 'rc-user-id'], null);

    if (!customerId && this.config.environment === 'production') {
      throw new UnprocessableEntityException(
        'Rc customer id is required to process this request.',
      );
    }

    if (!customerId && this.config.environment !== 'production') {
      return false;
    }

    try {
      const { items: subscriptions } = await this.customer.listSubscriptions({
        customerId,
        limit: 100,
        projectId: this.config.projectId,
      });

      return subscriptions.some(({ status }) =>
        ACTIVE_SUBSCRIPTION_STATUSES.includes(status),
      );
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}

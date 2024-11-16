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

@Injectable()
export class HasActiveSubscription implements CanActivate {
  public constructor(
    private entitlement: CustomerService,
    private config: ConfigService,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const customerId = this.extractCustomerIdFromHeader(request);

    if (!customerId && this.config.environment === 'production') {
      throw new UnprocessableEntityException(
        'Rc customer id is required to process this request.',
      );
    }

    if (!customerId && this.config.environment !== 'production') {
      return false;
    }

    try {
      const { items } = await this.entitlement.listSubscriptions({
        customerId,
        projectId: this.config.projectId,
      });

      console.log(items);

      return true;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  private extractCustomerIdFromHeader(request: any): string | null {
    return get(request, ['headers', 'rc-user-id'], null);
  }
}

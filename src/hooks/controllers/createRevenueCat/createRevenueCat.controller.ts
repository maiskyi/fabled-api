import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FabledChanelService } from '@services/telegram';

import {
  CreateRevenueCatRequest,
  CreateRevenueCatRequestEvent,
} from './createRevenueCat.dto';

@ApiTags('Hooks')
@Controller('/hooks')
export class CreateRevenueCatController {
  public constructor(private chanel: FabledChanelService) {}

  private genMessage({
    country_code,
    product_id,
    store,
    type,
  }: CreateRevenueCatRequestEvent) {
    return [
      '<strong>RevenuCat</strong>',
      `Conuntry code: ${country_code}`,
      `Product Id: ${product_id}`,
      `Store: ${store}`,
      `Event: ${type}`,
    ].join('\n');
  }

  @Post('revenuecat')
  public async createRevenueCat(@Body() request: CreateRevenueCatRequest) {
    const { event } = request;

    const message = this.genMessage(event);

    const res = await this.chanel.sendMessage({ message });

    return res.text;
  }
}

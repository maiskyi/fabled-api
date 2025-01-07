import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { GetDatabaseUrlResponse } from './getDatabaseUrl.dto';

@ApiTags('System')
@Controller('system')
export class GetDatabaseUrlController {
  @Get('database-url')
  @ApiOkResponse({
    type: GetDatabaseUrlResponse,
  })
  public getDatabaseUrl(): GetDatabaseUrlResponse {
    return { url: process.env.DATABASE_URL };
  }
}

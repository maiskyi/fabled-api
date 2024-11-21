import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('System')
@Controller('system')
export class GetDatabaseUrlController {
  @Get('database-url')
  @ApiOkResponse({
    type: String,
  })
  public getDatabaseUrl() {
    return process.env.DATABASE_URL;
  }
}

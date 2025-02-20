import { Injectable } from '@nestjs/common';

import { GenerateService } from '../generate';
import { SdxlService } from '../sdxl';

@Injectable()
export class StabilityAiClient {
  public constructor(
    public generate: GenerateService,
    public sdxl: SdxlService,
  ) {}
}

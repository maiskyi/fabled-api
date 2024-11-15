import { ApiProperty } from '@nestjs/swagger';

import { MoralLessonsItem } from './moralLessonIte.dto';
import { Config } from './config.dto';

export class Bootstrap {
  @ApiProperty({
    type: [MoralLessonsItem],
  })
  moralLessons: MoralLessonsItem[];

  @ApiProperty({
    type: Config,
  })
  config: Config;
}

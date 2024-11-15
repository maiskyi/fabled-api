import { ApiProperty } from '@nestjs/swagger';

import { MoralLessonsItem } from './moralLessonIte.dto';
import { Config } from './config.dto';
import { PromptItem } from './promptItem.dto';

export class Bootstrap {
  @ApiProperty({
    type: [MoralLessonsItem],
  })
  moralLessons: MoralLessonsItem[];

  @ApiProperty({
    type: [PromptItem],
  })
  prompts: PromptItem[];

  @ApiProperty({
    type: Config,
  })
  config: Config;
}

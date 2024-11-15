import { ApiProperty } from '@nestjs/swagger';

import { MoralLessonsItem } from '../moralLessonIte.dto';
import { Config } from '../config.dto';
import { PromptItem } from '../promptItem.dto';

import { CharacterItem } from './characterItem.response';

export class Bootstrap {
  @ApiProperty({
    type: [MoralLessonsItem],
  })
  moralLessons: MoralLessonsItem[];

  @ApiProperty({
    type: [CharacterItem],
  })
  characters: CharacterItem[];

  @ApiProperty({
    type: [PromptItem],
  })
  prompts: PromptItem[];

  @ApiProperty({
    type: Config,
  })
  config: Config;
}

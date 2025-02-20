import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsObject, IsOptional, ValidateNested } from 'class-validator';
import { ImageTransformationQuery } from '@common/dto';

export class BootstrapMoralLessonsItem {
  @ApiProperty()
  public readonly title: string;

  @ApiProperty()
  public readonly description: string;

  @ApiProperty()
  public readonly id: string;
}

export class BootstrapConfig {
  @ApiProperty()
  public readonly privacyPolicyUrl: string;

  @ApiProperty()
  public readonly termsAndConditionsUrl: string;
}

export class BootstrapPromptItem {
  @ApiProperty({
    type: String,
  })
  public readonly message: string;

  @ApiProperty({
    type: String,
  })
  public readonly id: string;

  @ApiProperty({
    type: String,
  })
  public readonly title: string;
}

export class BootstrapCharacterItem {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;

  @ApiProperty({
    type: String,
  })
  public readonly title: string;

  @ApiProperty({
    type: String,
  })
  public readonly image: string;
}

export class BootstrapPlaceOfEventPrompt {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;
}

export class BootstrapPlaceOfEventItem {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;

  @ApiProperty({
    type: String,
  })
  public readonly title: string;

  @ApiProperty({
    type: String,
  })
  public readonly image: string;

  @ApiProperty({
    type: BootstrapPlaceOfEventPrompt,
  })
  public readonly prompt: BootstrapPlaceOfEventPrompt;
}

export class BootstrapLullabyItem {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;

  @ApiProperty({
    type: String,
  })
  public readonly title: string;

  @ApiProperty({
    type: String,
  })
  public readonly url: string;

  @ApiProperty({
    type: String,
    isArray: true,
  })
  public readonly tags: string[];
}

export class BootstrapResponse {
  @ApiProperty({
    type: [BootstrapMoralLessonsItem],
  })
  public readonly moralLessons: BootstrapMoralLessonsItem[];

  @ApiProperty({
    type: [BootstrapCharacterItem],
  })
  public readonly characters: BootstrapCharacterItem[];

  @ApiProperty({
    type: [BootstrapPlaceOfEventItem],
  })
  public readonly placeOfEvents: BootstrapPlaceOfEventItem[];

  @ApiProperty({
    type: [BootstrapPromptItem],
  })
  public readonly prompts: BootstrapPromptItem[];

  @ApiProperty({
    type: BootstrapConfig,
  })
  public readonly config: BootstrapConfig;

  @ApiProperty({
    type: BootstrapLullabyItem,
    isArray: true,
  })
  public readonly lullabies: BootstrapLullabyItem[];
}

export class BootstrapQuery {
  @ApiProperty({
    required: false,
    type: ImageTransformationQuery,
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => ImageTransformationQuery)
  public readonly image: ImageTransformationQuery;
}

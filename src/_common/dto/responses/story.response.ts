import { ApiProperty } from '@nestjs/swagger';
import { StoryStatusType } from '@prisma/client';
import { DTO } from '@services/keystone';
import { IsOptional } from 'class-validator';

export enum StoryStatusLog {
  ContentInProgress = 'contentInProgress',
  CreateStoryRequestFailed = 'createStoryRequestFailed',
  ImageInProgress = 'imageInProgress',
  Initialized = 'initialized',
  StoryContentGenerationFailed = 'storyContentGenerationFailed',
  StoryContentGenerationFailedWithNoResult = 'storyContentGenerationFailedWithNoResult',
  StoryGenerationFailed = 'storyGenerationFailed',
  StoryImageGenerationFailed = 'storyImageGenerationFailed',
  StoryImageGenerationFailedWithNoResult = 'storyImageGenerationFailedWithNoResult',
  StoryImageUploadFailed = 'storyImageUploadFailed',
  StoryImageUploadingToCloudinaryFailed = 'storyImageUploadingToCloudinaryFailed',
  Success = 'success',
}

class StoryCharacter {
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
  public readonly emoji: string;
}

class StoryMoralLesson {
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
  public readonly emoji: string;
}

class StoryPlaceOfEvent {
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
  public readonly emoji: string;
}

class StoryPrompt {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;
}

export class Story {
  @ApiProperty({
    type: String,
  })
  public readonly title: string;

  @ApiProperty({
    type: String,
  })
  public readonly message: string;

  @ApiProperty({
    enum: StoryStatusType,
  })
  public readonly status: StoryStatusType;

  @ApiProperty({
    enum: StoryStatusLog,
    isArray: true,
  })
  public readonly statusLog: StoryStatusLog[];

  @ApiProperty({
    type: Date,
  })
  public readonly createdAt: Date;

  @ApiProperty({
    type: String,
  })
  public readonly content: string;

  @ApiProperty({
    type: String,
  })
  public readonly id: string;

  @ApiProperty({
    type: Number,
  })
  public readonly readTime: number;

  @ApiProperty({
    type: String,
    required: false,
  })
  public readonly image: string;

  @ApiProperty({
    type: StoryCharacter,
    required: false,
  })
  @IsOptional()
  public readonly character?: StoryCharacter;

  @ApiProperty({
    type: StoryMoralLesson,
  })
  public readonly moralLesson: StoryMoralLesson;

  @ApiProperty({
    type: StoryPlaceOfEvent,
  })
  public readonly placeOfEvent: StoryPlaceOfEvent;

  @ApiProperty({
    type: StoryPrompt,
  })
  public readonly prompt: StoryPrompt;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsOptional()
  public readonly childName?: string;

  @ApiProperty({
    enumName: 'ChildGender',
    enum: DTO.StoryChildGenderType,
    required: false,
  })
  @IsOptional()
  public readonly childGender?: string;
}

import { IsOptional, IsInt, Min, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { StoryStatusType } from '@prisma/client';

export class QueryParams {
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt({ message: 'Validation failed (numeric string is expected)' })
  @Min(0)
  public readonly skip?: number;

  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt({ message: 'Validation failed (numeric string is expected)' })
  @Min(0)
  public readonly take?: number;

  @IsOptional()
  @IsEnum(StoryStatusType)
  public readonly status?: StoryStatusType;
}

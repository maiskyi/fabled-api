import { ApiProperty } from '@nestjs/swagger';

export class MoralLessonsItem {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  id: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CharacterItem {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  title: string;

  @ApiProperty({
    type: String,
  })
  image: string;
}

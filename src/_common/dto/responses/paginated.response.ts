import { ApiProperty } from '@nestjs/swagger';

export abstract class Paginated<T extends object> {
  @ApiProperty()
  public readonly total: number;

  public abstract readonly data: T[];
}

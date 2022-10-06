// user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDTO {
  @ApiProperty({ description: '用户Id' })
  readonly _id: string;

  @ApiProperty({ description: '用户名' })
  readonly user_name: string;

  @ApiProperty({ description: '密码' })
  readonly password: string;
}

export class EditUserDTO {
  @ApiProperty({ description: '编辑的用户名' })
  readonly user_name: string;

  @ApiProperty({ description: '编辑的密码' })
  readonly password: string;
}

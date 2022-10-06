// user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({ description: '用户Id' })
  readonly _id: string;

  @ApiProperty({ description: '用户名' })
  @IsNotEmpty({ message: '缺少用户名' })
  readonly user_name: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '缺少密码' })
  readonly password: string;
}

export class EditUserDTO {
  @ApiProperty({ description: '编辑的用户名' })
  readonly user_name: string;

  @ApiProperty({ description: '编辑的密码' })
  readonly password: string;
}

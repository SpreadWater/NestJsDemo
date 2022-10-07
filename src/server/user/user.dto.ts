// user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { RoleType } from '../enum/role-type.enum';
export class CreateUserDTO {
  @ApiProperty({ description: '用户Id' })
  readonly _id: string;

  @ApiProperty({ description: '用户名' })
  @IsNotEmpty({ message: '缺少用户名' })
  readonly user_name: string;

  @ApiProperty({ description: '昵称' })
  readonly nick_name: string;

  @ApiProperty({ description: '头像' })
  readonly avatar: string;

  @ApiProperty({ description: '邮箱' })
  readonly email: string;

  @ApiProperty({ description: '角色' })
  @IsEnum(RoleType)
  readonly role: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '缺少密码' })
  readonly password: string;

  @ApiProperty({ description: '创建时间' })
  readonly create_time: string;

  @ApiProperty({ description: '创建时间' })
  readonly update_time: string;
}

export class EditUserDTO {
  @ApiProperty({ description: '编辑的用户名' })
  readonly userName: string;

  @ApiProperty({ description: '编辑的密码' })
  readonly password: string;
}

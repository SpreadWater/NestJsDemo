import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO, EditUserDTO } from './user.dto';
import { User } from './user.interface';
import { UserService } from './user.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

// interface UserResponse<T = unknown> {
//   code: number;
//   data?: T;
//   message: string;
// }

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // GET /user/users
  @ApiOperation({ summary: '获取所有用户' })
  @Get('users')
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
  // GET /user/:_id
  @ApiOperation({ summary: '根据Id查询用户' })
  @Get(':_id')
  async findOne(@Param('_id') _id: string): Promise<User> {
    return await this.userService.findOne(_id);
  }

  // POST /user
  @ApiOperation({ summary: '添加用户' })
  @Post()
  async addOne(@Body() body: CreateUserDTO) {
    return await this.userService.addOne(body);
  }

  // PUT /user/:_id
  @ApiOperation({ summary: '更新用户' })
  @Put(':_id')
  async editOne(@Param('_id') _id: string, @Body() body: EditUserDTO) {
    return await this.userService.editOne(_id, body);
  }

  // DELETE /user/:_id
  @ApiOperation({ summary: '删除用户' })
  @Delete(':_id')
  async deleteOne(@Param('_id') _id: string) {
    return await this.userService.deleteOne(_id);
  }
}

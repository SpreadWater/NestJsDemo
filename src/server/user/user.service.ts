import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO, EditUserDTO } from './user.dto';
import { User } from './user.interface';
// provider 不一定只能用来提供数据库的操作服务，还可以用来做一些用户校验，比如使用 JWT 对用户权限进行校验的策略

//使用@Injectable修饰后的 AppService

//在AppModule中注册之后，在app.controller.ts中使用，我们就不需要使用new AppService()去实例化，直接引入过来就可以用
@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private readonly userModel: Model<User>) {}

  // 查找所有用户
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  // 查找单个用户
  async findOne(_id: string): Promise<User> {
    return await this.userModel.findById(_id);
  }

  // 添加单个用户
  async addOne(body: CreateUserDTO): Promise<void> {
    const { _id } = body;
    if (!_id) {
      throw new HttpException('缺少用户id', 401);
    }
    const user = await this.userModel.findById(_id);
    if (user) {
      throw new HttpException('用户已存在', 401);
    }
    await this.userModel.create(body);
  }

  // 编辑单个用户
  async editOne(_id: string, body: EditUserDTO): Promise<void> {
    const existUser = await this.userModel.findById(_id);

    if (!existUser) {
      throw new HttpException(`id为${_id}的用户不存在`, 401);
    }
    await this.userModel.findByIdAndUpdate(_id, body);
  }

  // 删除单个用户
  async deleteOne(_id: string): Promise<void> {
    const existUser = await this.userModel.findById(_id);

    if (!existUser) {
      throw new HttpException(`id为${_id}的用户不存在`, 401);
    }
    await this.userModel.findByIdAndDelete(_id);
  }
}

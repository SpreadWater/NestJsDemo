import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
import { PostsModule } from './server/posts/posts.module';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestdemo'),UserModule, PostsModule],
  controllers: [AppController],
  providers: [AppService, PostsService],
})
export class AppModule {}

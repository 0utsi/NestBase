import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UserModule, CommentModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}

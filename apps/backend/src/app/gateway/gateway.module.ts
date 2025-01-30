import { Module } from '@nestjs/common';
import { MyGateway } from './gateway';
import { ChatService } from '../chat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from '../tools/chat.entity';
import { PrivateEntity } from '../tools/private.entity';
import { UserEntity1 } from '../tools/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity1, ChatEntity, PrivateEntity])],
  providers: [MyGateway, ChatService],
})
export class GatewayModule {}

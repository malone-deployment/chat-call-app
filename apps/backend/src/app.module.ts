import { Module } from '@nestjs/common';
import { ChatModule } from './app/chatmodule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './app/tools/user.entity';
import { ChatEntity } from './app/tools/chat.entity';
import { PrivateEntity } from './app/tools/private.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_INSTANCE_UNIX_SOCKET, // Cloud SQL instance connection
      port: parseInt(process.env.POSTGRES_DB_PORT, 10),
      username: process.env.POSTGRES_DB_USER,
      password: process.env.POSTGRES_DB_PASS,
      database: process.env.POSTGRES_DB_NAME,
      entities: [UserEntity, ChatEntity, PrivateEntity],
      synchronize: true,
    }),

    ChatModule,
  ],
})
export class MainModule {}

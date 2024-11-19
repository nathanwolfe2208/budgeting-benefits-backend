import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Models/user/user.module';
import * as dotenv from 'dotenv';
import { User } from './Models/user/entities/user.entity';
import { AuthModule } from './Auth/auth.module';
import { TransactionsModule } from './Models/transactions/transactions.module';
import { Transaction } from './Models/transactions/entities/transaction.entity';


dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Transaction],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    AuthModule,
    TransactionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
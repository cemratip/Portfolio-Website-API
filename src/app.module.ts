import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from './app.model';
import * as dotenv from 'dotenv';
dotenv.config(); 

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECT),
    MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

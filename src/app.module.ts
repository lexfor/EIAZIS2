import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnalizatorModule } from './analizator/analizator.module';

@Module({
  imports: [AnalizatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

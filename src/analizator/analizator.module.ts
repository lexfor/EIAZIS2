import { Module } from '@nestjs/common';
import { AnalizatorService } from './analizator.service';
import { AnalizatorController } from './analizator.controller';

@Module({
  controllers: [AnalizatorController],
  providers: [AnalizatorService]
})
export class AnalizatorModule {}

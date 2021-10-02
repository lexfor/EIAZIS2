import { Test, TestingModule } from '@nestjs/testing';
import { AnalizatorController } from './analizator.controller';
import { AnalizatorService } from './analizator.service';

describe('AnalizatorController', () => {
  let controller: AnalizatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalizatorController],
      providers: [AnalizatorService],
    }).compile();

    controller = module.get<AnalizatorController>(AnalizatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

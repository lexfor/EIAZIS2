import { Test, TestingModule } from '@nestjs/testing';
import { AnalizatorService } from './analizator.service';

describe('AnalizatorService', () => {
  let service: AnalizatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalizatorService],
    }).compile();

    service = module.get<AnalizatorService>(AnalizatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

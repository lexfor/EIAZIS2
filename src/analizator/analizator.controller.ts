import { Body, Controller, Post } from '@nestjs/common';
import { AnalizatorService } from './analizator.service';
import { WordsDto } from './dto/words-dto';

@Controller('analizator')
export class AnalizatorController {
  constructor(private readonly analizatorService: AnalizatorService) {}

  @Post('alphabet')
  findByAlphabet(@Body() words: WordsDto): string {
    const letters = this.analizatorService.wordsToArray(words.words);
    return this.analizatorService.checkDocumentByAlphabet(letters);
  }

  @Post('words')
  findByWords(@Body() words: WordsDto): string {
    return this.analizatorService.checkDocumentByWords(words.words);
  }
}

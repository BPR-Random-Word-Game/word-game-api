import { Body, Controller, Get, Post } from '@nestjs/common';
import newWordDto from './dto/newWord.dto';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  getAllWords() {
    return this.wordsService.getAllWords();
  }

  @Post()
  addNewWord(@Body() newWord: newWordDto) {
    return this.wordsService.addNewWord(newWord);
  }
}

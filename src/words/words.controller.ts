import { Body, Controller, Get, Post } from '@nestjs/common';
import NewWordDto from './dto/newWord.dto';
import RequestWordDto from './dto/requestWord.dto';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  getAllWords() {
    return this.wordsService.getAllWords();
  }

  @Post('requestword')
  getWordByLength(@Body() requestWordDto: RequestWordDto) {
    return this.wordsService.findAWordByLength(requestWordDto);
  }

  @Post()
  addNewWord(@Body() newWord: NewWordDto) {
    return this.wordsService.addNewWord(newWord);
  }
}

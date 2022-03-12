import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import newWordDto from './dto/newWord.dto';
import Word from './word.entity';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(Word)
    private wordsRepository: Repository<Word>,
  ) {}

  async getAllWords() {
    return await this.wordsRepository.find();
  }

  async addNewWord(newWordDto: newWordDto) {
    const length = newWordDto.word.length;
    const newWord: Word = {
      word: newWordDto.word,
      length: length,
      hasRepeatedCharacters: newWordDto.hasRepeatedCharacter,
    };
    return await this.wordsRepository.create(newWord);
  }
}

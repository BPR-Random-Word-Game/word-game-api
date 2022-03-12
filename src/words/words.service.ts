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
    const [words, count] = await this.wordsRepository.findAndCount();
    console.log(count);
    return words;
  }

  async addNewWord(newWordDto: newWordDto) {
    const length = newWordDto.word.length;
    const newWord: Word = {
      word: newWordDto.word,
      length: length,
      hasRepeatedCharacters: newWordDto.hasRepeatedCharacter,
    };
    const addedWord = await this.wordsRepository.create(newWord);
    await this.wordsRepository.save(addedWord);
    return addedWord;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import NewWordDto from './dto/newWord.dto';
import RequestWordDto from './dto/requestWord.dto';
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

  async findAWordByLength(requestWordDto: RequestWordDto) {
    let words = await this.wordsRepository.find({
      length: requestWordDto.length,
    });

    if (words === []) return null;

    if (!requestWordDto.hasRepeatedCharacters) {
      words = words.filter((word) => !word.hasRepeatedCharacters);
    }
    const index = Math.floor(Math.random() * (words.length - 1));
    const output: NewWordDto = {
      word: words[index].word,
      hasRepeatedCharacters: words[index].hasRepeatedCharacters,
    };
    return output;
  }

  async addNewWord(newWordDto: NewWordDto) {
    const length = newWordDto.word.length;
    const newWord: Word = {
      word: newWordDto.word,
      length: length,
      hasRepeatedCharacters: newWordDto.hasRepeatedCharacters,
    };
    const addedWord = await this.wordsRepository.create(newWord);
    await this.wordsRepository.save(addedWord);
    return addedWord;
  }
}

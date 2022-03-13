import { Module } from '@nestjs/common';

import { WordsService } from './words.service';
import { WordsController } from './words.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Word from './word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Word])],
  providers: [WordsService],
  controllers: [WordsController],
})
export class WordsModule {}

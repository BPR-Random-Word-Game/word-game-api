/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Word {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({ unique: true })
    public word: string;

    @Column()
    public length: number;

    @Column()
    public hasRepeatedCharacters: boolean;
}

export default Word;
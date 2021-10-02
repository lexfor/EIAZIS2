import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalizatorService {
  private russianAlphabet: string[];
  private englishAlphabet: string[];
  private englishMostPopularWords: string[];
  private russianMostPopularWords: string[];

  constructor() {
    this.russianAlphabet = [
      'а',
      'б',
      'в',
      'г',
      'д',
      'е',
      'ё',
      'ж',
      'з',
      'и',
      'к',
      'л',
      'м',
      'н',
      'о',
      'п',
      'р',
      'с',
      'т',
      'у',
      'ф',
      'х',
      'ц',
      'ч',
      'ш',
      'щ',
      'ъ',
      'ы',
      'ь',
      'э',
      'ю',
      'я',
    ];

    this.englishAlphabet = [
      'a',
      'b',
      'c',
      'd',
      'д',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];

    this.englishMostPopularWords = [
      'one',
      'then',
      'by',
      'person',
      'my',
      'than',
      'his',
      'take',
      'will',
      'other',
      'but',
      'know',
      'number',
      'see',
      'this',
      'him',
      'or',
      'them',
      'at',
      'over',
      'she',
      'could',
      'do',
      'its',
      'her',
      'some',
      'you',
      'come',
      'say',
      'good',
      'as',
      'only',
      'we',
      'your',
      'he',
      'look',
      'they',
      'year',
      'all',
      'now',
      'from',
      'into',
      'use',
      'want',
      'after',
      'new',
      'back',
      'even',
      'also',
      'way',
      'think',
      'well',
      'most',
      'first',
      'day',
      'work',
      'give',
      'our',
      'these',
      'how',
      'any',
      'two',
      'because',
      'get',
      'just',
      'who',
      'no',
      'about',
      'time',
      'if',
      'like',
      'out',
      'can',
      'up',
      'make',
      'so',
      'when',
      'what',
      'me',
      'their',
      'go',
      'there',
      'which',
      'would',
      'be',
      'with',
      'us',
      'on',
      'boy',
      'not',
      'girl',
      'for',
      'friend',
      'it',
      'month',
      'have',
      'that',
      'in',
      'and',
      'to',
    ];

    this.russianMostPopularWords = [
      'автор',
      'я',
      'время',
      'балл',
      'белорусский',
      'беседа',
      'библиотека',
      'брать',
      'будущий',
      'важный',
      'вариант',
      'век',
      'великий',
      'вернуть',
      'вести',
      'взять',
      'внимание',
      'вопрос',
      'время',
      'выбор',
      'выйти',
      'выполнить',
      'выпускник',
      'газета',
      'город',
      'государство',
      'готовить',
      'грамматика',
      'диалог',
      'древний',
      'забыть',
      'задание',
      'закон',
      'закончить',
      'закрывать',
      'информация',
      'значение',
      'знать',
      'искать',
      'использовать',
      'исполнять',
      'память',
      'ошибка',
      'писать',
      'помнить',
      'пример',
      'слово',
      'язык',
      'на',
      'в',
      'под',
      'из',
      'от',
      'при',
      'до',
      'для',
      'за',
      'к',
      'над',
      'о',
      'про',
      'с',
      'у',
      'через',
      'а',
      'и',
      'или',
      'что',
      'если',
      'ни',
      'но',
      'так',
      'как',
      'не',
      'да',
      'хотя',
      'будто',
      'ли',
      'раз',
      'один',
      'два',
      'мама',
      'папа',
      'будто',
      'разве',
      'давай',
      'даже',
      'вон',
      'вот',
      'уж',
      'ведь',
      'каждый',
      'брат',
      'сестра',
      'там',
      'здесь',
      'только',
      'ты',
      'мы',
      'вы',
    ];
  }

  checkDocumentByAlphabet(document: string[]): string {
    for (const letter of document) {
      if (
        this.russianAlphabet.indexOf(letter) !== -1 &&
        this.englishAlphabet.indexOf(letter) === -1
      ) {
        return 'russian';
      }

      if (
        this.russianAlphabet.indexOf(letter) === -1 &&
        this.englishAlphabet.indexOf(letter) !== -1
      ) {
        return 'english';
      }
    }
  }

  checkDocumentByWords(document: string[]): string {
    for (const word of document) {
      if (
        this.russianMostPopularWords.indexOf(word) !== -1 &&
        this.englishMostPopularWords.indexOf(word) === -1
      ) {
        return 'russian';
      }

      if (
        this.russianMostPopularWords.indexOf(word) === -1 &&
        this.englishMostPopularWords.indexOf(word) !== -1
      ) {
        return 'english';
      }
    }
  }

  wordsToArray(words: string[]): string[] {
    const letters = [];
    for (const word of words) {
      const wordLetters = word.split('');
      for (const letter of wordLetters) {
        letters.push(letter);
      }
    }
    return letters;
  }
}

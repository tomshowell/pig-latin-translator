import {
    beginsWithConsonant,
    wordBeginsWithConsonant,
    wordBeginsWithVowel,
    handleSentence,
    transformWord,
} from "./lib/word-transform";

describe('rule one', () => {
  test('words begins with vowel', () => {
    const beginsWithVowell = beginsWithConsonant('apple');
    const beginsWithC = beginsWithConsonant('carrot');

    expect(beginsWithVowell).toBe(false);
    expect(beginsWithC).toBe(true);
  });

  describe('outputs words beginning with consonant, moves letters before first vowler and appends ay', () => {
    test('pig', () => {
      const result = wordBeginsWithConsonant('pig');
      expect(result).toBe('igpay');
    });
    test('latin', () => {
      const result = wordBeginsWithConsonant('latin');
      expect(result).toBe('atinlay');
    });
    test('smile', () => {
      const result = wordBeginsWithConsonant('smile');
      expect(result).toBe('ilesmay');
    });
  });

  describe('word begins with vowel', () => {
    test('egg', () => {
      const result = wordBeginsWithVowel('egg');
      expect(result).toBe('eggyay');
    });
    test('explain', () => {
      const result = wordBeginsWithVowel('explain');
      expect(result).toBe('explainyay');
    });
    test('I', () => {
      const result = wordBeginsWithVowel('I');
      expect(result).toBe('Iyay');
    });
  });
});


describe('handle transformation of sentences', () => {
  test('pleased to meet you', () => {
    const res = handleSentence('pleased to meet you');

    expect(res).toBe('easedplay otay eetmay ouyay');
  });
  test('how much does it cost', () => {
    const res = handleSentence('how much does it cost');

    expect(res).toBe('owhay uchmay oesday ityay ostcay');
  });
  test('i would rather be at the beach', () => {
    const res = handleSentence('i would rather be at the beach');

    expect(res).toBe('iyay ouldway atherray ebay atyay ethay eachbay');
  });
  test('a tree whose elements have at most two children is called a binary tree', () => {
    const res = handleSentence('a tree whose elements have at most two children is called a binary tree');

    expect(res).toBe('ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay inarybay eetray');
  });
});

// TODO - probably scope to refactor this into a single class

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

export const beginsWithConsonant = (str) => {
  return !VOWELS.includes(str.toLowerCase().substr(0, 1));
};

export const getVowelPosition = (str) => {
  const strLen = str.length;
  const splitStr = str.split('');

  for (let i = 0; i < strLen; i++) {
    if (!beginsWithConsonant(splitStr[i])) {
       const positionOfFirstVowel = i;
       return positionOfFirstVowel;
    }
  }
};

export const moveBeforeVowel = (vowelPos, str) => {
  const splitStr = [str.substr(0, vowelPos), str.substr(vowelPos)];
  const appendedStr = splitStr[1] + splitStr[0];

  return appendedStr + 'ay';
};

export const wordBeginsWithConsonant = (str) => {
  const positionOfFirstVowel = getVowelPosition(str);

  return moveBeforeVowel(positionOfFirstVowel, str);
};

export const wordBeginsWithVowel = (str) => {
  return str + 'yay';
};

// transforms a single words based off criteria
export const transformWord = (str) => {
  let result = '';
  if (str.length > 0) {
    // check begins with consonant
    if (beginsWithConsonant(str)) {
      result = wordBeginsWithConsonant(str);
    } else { // or beings with vowel
      result = wordBeginsWithVowel(str);
    }
  }

  return result;
}

export const handleSentence = (sent) => {
  const splitSent = sent.split(/ /);

  const transformedSent = splitSent.map((item) => {
    return transformWord(item);
  });

  return transformedSent.join(' ');
};

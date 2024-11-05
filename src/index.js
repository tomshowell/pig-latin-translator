import readline from 'node:readline';
import { handleSentence } from './lib/word-transform.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getTranslateInput = () => {
  rl.question('Enter a word of sentence to translate into pig latin: ', (inputStr) => {
    console.log(`${inputStr} translated to pig latin is: \x1b[32m ${handleSentence(inputStr)} \x1b[0m`);
    getTranslateInput();
  });
};

if (process.argv.length > 2) {
  console.log('\x1b[32m%s\x1b[0m', handleSentence(process.argv[2]));
  process.exit();
} else {
  getTranslateInput();
}

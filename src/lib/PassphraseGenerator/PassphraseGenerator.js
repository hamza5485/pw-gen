import RandomNumberGenerator from '../RandomNumberGenerator';
import diceware from './diceware.json';

class PassphraseGenerator {

    _wordlist = diceware.wordlist;
    _symbols = ['=', '+', '-', '^', '$', '*', '.', '[', ']', '{',
        '}', '(', ')', '?', '"', '!', '@', '#', '%', '&', '/',
        '\\', '>', '<', `'`, ':', ';', '|', '_', '~', '`'];

    constructor() {
        this._randomGen = new RandomNumberGenerator()
    }

    async generatePassphrase() {
        const numberArr = await this._randomGen.generateSequence(6, 5, 5, false);
        if (numberArr.length > 0) {
            const keyList = this._formKeys(numberArr);
            let phrase = this._getPhrase(keyList);
            let passphrase = this._strengthen(phrase);
            return passphrase;
        }
    }

    _formKeys(numbers) {
        let keylist = [];
        numbers.forEach(arr => {
            let seq = "";
            arr.forEach(el => {
                seq += el.toString();
            });
            keylist.push(parseInt(seq));
        });
        return keylist;
    }

    _getPhrase(numbers) {
        let phrase = '';
        numbers.forEach((int, i) => {
            const index = this._wordlist.findIndex(el => el.key === int);
            if (index !== -1) phrase += i === numbers.length - 1 ? `${this._wordlist[index].value}` : `${this._wordlist[index].value} `;
        });
        return phrase;
    }

    async _strengthen(phrase) {
        let strengthened = '';
        // random indexes to capitalize 
        const indexesToCapitalize = await this._randomGen.generate(phrase.length, Math.floor(phrase.length / 2));
        // random numbers and indexes @ which they'll be added
        const indexesForNumbers = await this._randomGen.generateSequence(phrase.length, 2, 5, false);
        // random indexes to get symbols from _symbols && indexes where symbols will be added
        const symbolDefinition = await this._randomGen.generateSequence(phrase.length < this._symbols.length ? phrase.length : this._symbols.length, 2, 5, false);
        if (indexesToCapitalize.length > 0 && indexesForNumbers.length > 0 && symbolDefinition.length > 0) {
            // capptialize words
            let capitalized = '';
            phrase.split('').forEach((char, i) => indexesToCapitalize.includes(i) ? capitalized += char.toUpperCase() : capitalized += char);
            // add symbols
            const symbols = symbolDefinition[0].map(el => this._symbols[el]);
            let symbolized = '';
            symbolDefinition[1].forEach((position, index) => {
                symbolized = symbolized === '' ?
                    this._insertAt(capitalized, symbols[index], position) :
                    this._insertAt(symbolized, symbols[index], position);
            });
            // add numbers
            indexesForNumbers[1].forEach((position, index) => {
                strengthened = strengthened === '' ?
                    this._insertAt(symbolized, indexesForNumbers[0][index], position) :
                    this._insertAt(strengthened, indexesForNumbers[0][index], position);
            });
        }
        return strengthened;
    }

    _insertAt(string, toInsert, position) {
        return string.substring(0, position) + toInsert + string.substring(position);
    }
}

export default PassphraseGenerator;
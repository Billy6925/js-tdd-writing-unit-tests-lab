import { isPalindrome } from '../utils';

describe('isPalindrome', () => {
    it('returns true if the string is a palindrome', () => {
        const word = 'RaCeCaR';
        const notWord = '';
        const palindrome = isPalindrome(word);
        const notPalindrome = isPalindrome(notWord);
        expect(palindrome).toBe(true);
        expect(notPalindrome).toBe(false);
    });

    it('throws an error if the input contains non-alphabetic characters', () => {
        expect(() => isPalindrome('RaCeCaR123')).toThrow('Input contains non-alphabetic characters');
        expect(() => isPalindrome('!racecar!')).toThrow('Input contains non-alphabetic characters');
    });
});

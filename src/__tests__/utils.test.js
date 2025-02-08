// Your tests here
import {isPalindrome} from '../utils';

describe('isPalindrome', () => {
    it('returns true if the string is a palindrome', () => {
    const word = 'RaCeCaR';
    const notWord = 'car';
    const palindrome = isPalindrome(word);
    const notPalindrome = isPalindrome(notWord);
    expect(palindrome).toBe(true);
    expect(notPalindrome).toBe(false);
    });
});



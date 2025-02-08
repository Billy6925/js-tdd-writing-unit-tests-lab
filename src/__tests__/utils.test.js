import {isPalindrome} from '../utils';

describe('isPalindrome',()=> {
    it('return true if a string is a palindrome',()=>{
        //Arrange
        const word = 'RaCeCaR'
        //Act
        const palindrome = isPalindrome(word)
        //Assert
        expect(palindrome).toBe(true);
    })
    it('returns false for an empty string',()=>{
        //Arrange
        const notWord = ''
        //Act
        const notPalindrome = isPalindrome(notWord)
        //Assert
        expect(notPalindrome).toBe(false);
    })
    it('throws an error if the input contains non-alphabetic characters',()=>{
        expect(() =>isPalindrome('RaCeCaR123')).toThrow('Input contains non-alphabetic characters')
expect(()=>isPalindrome('!racecar!')).toThrow('Input contains non-alphabetic characters')
    })
    it('throws an error if the input is not a string',()=>{
        expect(() =>isPalindrome(123)).toThrow('Input is not a string')
        expect(()=> isPalindrome(null).toThrow('Input is not a string'))
        expect(()=>isPalindrome(undefined).toThrow('Input is not a string'))
        expect(()=>isPalindrome({}).toThrow('Input is not a string'))
        expect(()=>isPalindrome([]).toThrow('Input is not a string'))
    })
})
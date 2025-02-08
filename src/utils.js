// Your code here
export function isPalindrome(word) {
    if(typeof word !== 'string') throw new Error("Input is not a string");
    if(!word) return false;
    if(!/^[A-Za-z]+$/.test(word)){
        throw new Error("Input contains non-alphabetic characters");
    }
    const reversedWord = word.toLowerCase().split('').reverse().join('');
    return word.toLowerCase() === reversedWord;
}
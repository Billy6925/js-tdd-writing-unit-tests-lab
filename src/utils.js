// Your code here
export function isPalindrome(word) {
    if(!word) return false;
    const reversedWord = word.toLowerCase().split('').reverse().join('');
    return word.toLowerCase() === reversedWord;
}
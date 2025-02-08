// Your code here
export function isPalindrome(word) {
    const reversedWord = word.toLowerCase().split('').reverse().join('');
    return word.toLowerCase() === reversedWord;
}
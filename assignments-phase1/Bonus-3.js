// Name: Yousef Elgendy
// Bonus 3:  Palindrome Checker
// Description: cheek if the word is a palindrome or no

let word = prompt("Enter a word to cheek is palindrome or not");

alert(isPalindrome(word));

function isPalindrome(word){
    let leftPointer = 0, rightPointer = word.length -1;
    while(leftPointer < rightPointer){
        if(word[leftPointer] != word[rightPointer]) return false;

        leftPointer++;
        rightPointer--;
    }
    return true;
}

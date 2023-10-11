const { consoleLog } = require("mocha/lib/reporters/base");

function isPalindrome(word) {
  const lowerWord = word.toLowerCase();
  const reversedWord = lowerWord.split('').reverse().join('');
  if (lowerWord === reversedWord){
    return true;
  } else {
    return false;
  }
}

/* 
take argument of a string in isPalindrome
  checks if string is a palindrome:
    if it is a palindrome:
      return true;
    if it is not a palindrome:
      return false;
*/

/*
the function takes an argument of a string
  a new variable is created to hold the string as all lowercase
  a new variable is created to hold the lowercased string as reversed
  the main string and the reverse string are compared
    if they are the same, back and forth, the funtion returns true
  or
    anything other than them being the same, not the same, returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("story"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

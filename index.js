function isPalindrome(word) {
  // Write your algorithm here
  const lowercase = word.toLowerCase();

  const reversedWord = lowercase.split("").reverse();    // split the word into an array
  if (lowercase === reversedWord.join("")) {          // join the array back into a string
    return true;    
  }else{
    return false;
  }
}

//second method

function isPalindrome2(string){
  let len = string.length;
  // let half = Math.floor(len)
  let start = string.substring(0, Math.floor(len/2)).toLowerCase()

  let end = string.substring(len - Math.floor(len/2)).toLowerCase()
  let flip = end.split("").reverse().join("")

  if(start === flip){
    return true
  } else
  return false

}
console.log(isPalindrome2("redivider"))
console.log(isPalindrome2("madam"))
console.log(isPalindrome2("window"))
console.log(isPalindrome2("deed"))


/* 
  Add your pseudocode here
  Input: a string
  Output: boolean
  Steps to solve the problem:
  1. create an array of the string
  2. convert the string to lowercase
  3. reverse the string
  4. return the reversed string
  5. compare the reversed string to the original string
*/

/*
  Add written explanation of your solution here
  I first changed all the words tat will be inputted to lowercase, split the words into individual array of characters and reversed them.
  I then joined back the reversed array and compared with the original word that i lowercased.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log(isPalindrome("mom"))
  console.log(isPalindrome("motor"));
}

module.exports = isPalindrome;

/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel (char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.indexOf(char.toLowerCase()) != -1;
};
function countVowels(str) {
    // Your code here
    let res = 0
    for(let char of str){
      if(isVowel(char))
        res += 1
    }
    return res
}

module.exports = countVowels;
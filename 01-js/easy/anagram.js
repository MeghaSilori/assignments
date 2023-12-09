/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
 let mp1 = new Map()
 for (let i of str1) {
    let x = 0;
    if(mp1.has(i)){
      x=mp1.get(i);
    }
    mp1.set(i, x+1)
 }
 for (let j of str2) {
    if(mp1.has(j)){
      let y=mp1.get(j)
      mp1.set(j,y-1);
    }
    else {
      return false;
    }
 }
 for(let x of mp1.values()){
    if(x != 0) return false;
 }
 return true;
}

module.exports = isAnagram;


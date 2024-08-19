// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // # SECOND SOLUTION
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
    return false;

  for (let key in aCharMap) {
    if (aCharMap[key] !== bCharMap[key]) return false;
  }

  return true;

  // # FIRST SOLUTION
  //   const word1 = stringA
  //     .replace(/[^\w]/g, "")
  //     .toLowerCase()
  //     .split("")
  //     .sort()
  //     .join();
  //   const word2 = stringB
  //     .replace(/[^\w]/g, "")
  //     .toLowerCase()
  //     .split("")
  //     .sort()
  //     .join();

  //   return word1 === word2;
}

function buildCharMap(str) {
  const dic = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    dic[char] = str[char] + 1 || 1;
  }
  return dic;
}

module.exports = anagrams;

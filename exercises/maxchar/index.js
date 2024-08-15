// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const dic = {};
  for (let char of str.split("")) {
    if (char in dic) dic[char]++;
    else dic[char] = 1;
  }

  var max = 0;
  var maxChar = "";
  for (let char in dic) {
    if (dic[char] > max) {
      max = dic[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

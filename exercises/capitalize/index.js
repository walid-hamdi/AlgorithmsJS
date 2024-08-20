// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // # SECOND SOLUTION
  let result = "";
  result += str[0].toUpperCase();
  for (let i = 1; i <= str.length - 1; i++) {
    if (str[i - 1] === " ") result += str[i].toUpperCase();
    else result += str[i];
  }

  return result;

  // # FIRST SOLUTION
  //   const arr = [];
  //   for (word of str.split(" ")) {
  //     arr.push(word.charAt(0).toUpperCase() + word.slice(1));
  //   }

  //   return arr.join(" ");
}

module.exports = capitalize;

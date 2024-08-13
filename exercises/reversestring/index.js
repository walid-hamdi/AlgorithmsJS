// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   let word = "";
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     word = str[i] + word;
  //   }
  //   return word;

  return str.split("").reduce((acc, word) => word + acc, "");
}

module.exports = reverse;

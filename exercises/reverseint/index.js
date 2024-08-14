// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const dash = n.toString().indexOf("-");

  if (dash !== -1)
    return (
      parseInt(
        n
          .toString()
          .slice(dash + 1)
          .split("")
          .reduce((rev, char) => char + rev, "")
      ) * -1
    );
  else
    return parseInt(
      n
        .toString()
        .split("")
        .reduce((rev, char) => char + rev, "")
    );
}

module.exports = reverseInt;

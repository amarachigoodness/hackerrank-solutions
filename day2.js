// First, print each vowel in S on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in S.
// Second, print each consonant (i.e., non-vowel) in S on a new line in the same order as it appeared in S.
function vowelsAndConsonants(s) {
  let letters = [...s];
  let vowels = ["a", "e", "i", "o", "u"];

  for (let vowel in letters) {
    for (let alph = 0; alph < vowels.length; alph++) {
      if (letters[vowel] === vowels[alph]) {
        console.log(letters[vowel]);
      }
    }
  }

  let consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let consonant in letters) {
    for (let alph = 0; alph < consonants.length; alph++) {
      if (letters[consonant] === consonants[alph]) {
        console.log(letters[consonant]);
      }
    }
  }
}

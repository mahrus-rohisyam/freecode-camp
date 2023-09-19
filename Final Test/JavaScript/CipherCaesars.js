const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function rot13(input) {
  /**
   *
   */
  let accumulator = "";
  let str = input.toUpperCase()
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isALetter = alphabet.includes(char);
    if (isALetter === false) {
      accumulator += char;
    } else {
      const charIndex = alphabet.findIndex((character) => character === char);

      accumulator += charIndex + 1;
    }
  }
  return accumulator;
}

let hasil = rot13("wdjgxjwgdk");
console.log(hasil);
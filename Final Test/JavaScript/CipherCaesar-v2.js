class CipherCaesar {
  decoder = 13;
  input = "asd";
  alphabet = [
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

  coninputuctor(input, decoder) {
    this.decoder = decoder;
    this.input = input;
  }

  decode() {
    const { decoder, alphabet, input } = this;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const isALetter = alphabet.includes(char);
      if (isALetter === false) {
        input += char;
      } else {
        const charIndex = alphabet.findIndex((character) => character === char);

        input +=
          alphabet[charIndex + decoder] ||
          alphabet[charIndex - decoder];
      }
    }
    return input;
  }

  encode() {}
}
let test = new CipherCaesar("SERR PBQR PNZC", 13).decode();
console.log(test);

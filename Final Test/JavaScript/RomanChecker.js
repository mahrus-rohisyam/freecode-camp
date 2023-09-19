function convertToRoman(num) {
  /**
   * 1. Create declaration of number
   * 2. Create accumulator
   * 3. Loop the key and value
   * 4. Add additional operation
   */
  
  let romanNumber = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let accumulator = "";

  for (const key in romanNumber) {
    const valueOfKey = romanNumber[key];

    while (valueOfKey <= num) {
      num -= valueOfKey;
      accumulator += key;
    }
  }

  return accumulator;
}

console.log(convertToRoman(36));

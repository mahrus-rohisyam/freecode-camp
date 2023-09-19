function palindrome(str) {
  /**
   * 1. Lower the case
   * 2. Check alphanumeric characters
   * 3. Check string = reversedString
   */

  const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g);

  return alphanumericOnly.join("") === alphanumericOnly.reverse().join("");
}

palindrome("eye");

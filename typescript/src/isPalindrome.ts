function isPalindrome(x: string): boolean {
  const clean = x.toLowerCase();
  return clean === clean.split("").reverse().join("");
}

console.log(isPalindrome("aba"));

"use strict";
function isPalindrome(x) {
    const clean = x.toLowerCase();
    return clean === clean.split("").reverse().join("");
}
console.log(isPalindrome("aba"));

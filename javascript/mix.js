function mix(s1, s2) {
  const count1 = countLetters(s1);
  const count2 = countLetters(s2);

  const result = [];

  for (let charCode = "a".charCodeAt(0); charCode <= "z".charCodeAt(0); charCode++) {
    const char = String.fromCharCode(charCode);

    const maxCount1 = count1[char] || 0;
    const maxCount2 = count2[char] || 0;

    if (maxCount1 > 1 || maxCount2 > 1) {
      if (maxCount1 > maxCount2) {
        result.push(`1:${char.repeat(maxCount1)}`);
      } else if (maxCount1 < maxCount2) {
        result.push(`2:${char.repeat(maxCount2)}`);
      } else {
        result.push(`=:${char.repeat(maxCount1)}`);
      }
    }
  }

  return result.sort((a, b) => b.length - a.length || (a < b ? -1 : 1)).join("/");
}

function countLetters(str) {
  const count = {};
  for (let char of str) {
    if (char >= "a" && char <= "z") {
      count[char] = (count[char] || 0) + 1;
    }
  }
  return count;
}

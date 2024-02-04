function generateHashtag(str) {
  const string = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return string.length >= 140 || !string ? false : `#${string}`;
}

console.log(generateHashtag("a".repeat(140)));

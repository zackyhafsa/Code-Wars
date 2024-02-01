function toAlternatingCase(s: string): string {
  return s
    .split("")
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join("");
}

console.log(toAlternatingCase("HeLLo WoRLD"));

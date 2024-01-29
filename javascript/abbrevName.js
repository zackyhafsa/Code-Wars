function abbrevName(name) {
  const words = name.split(" ");
  const initial = words.map((word) => word.charAt(0).toUpperCase()).join(".");
  return initial;
}

console.log(abbrevName("Zacky Hafsari"));

String.prototype.toJadenCase = function () {
  const words = this.split(" ");
  const capitalized = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const jadenCase = capitalized.join(" ");
  return jadenCase;
};

const kata = "halo perkenalkan nama saya zacky hafsari dari kelas 2c informatika";
console.log(kata.toJadenCase());

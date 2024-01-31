// function feast(beast: string, dish: string): boolean {
//   const beastFirstLetter = beast.charAt(0);
//   const beastLastLetter = beast.charAt(beast.length - 1);
//   const dishFirstLetter = dish.charAt(0);
//   const dishLastLetter = dish.charAt(dish.length - 1);
//   return beastFirstLetter === dishFirstLetter && beastLastLetter === dishLastLetter;
// }

const feast = (beast: string, dish: string): boolean =>
  beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));

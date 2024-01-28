function countSheep(num) {
  let murmur = "";
  for (let i = 1; i <= num; i++) {
    murmur += `${i} sheep...`;
  }
  console.log(murmur);
}

countSheep(7);

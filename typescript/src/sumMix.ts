function sumMix(x: any[]): number {
  return x.map((value) => Number(value)).reduce((acc, curr) => acc + curr, 0);
}

// const sumMix = (x: any[]): number =>
//   x.map((value) => Number(value)).reduce((acc, curr) => acc + curr, 0);

console.log(sumMix([9, 3, "7", "3"]));

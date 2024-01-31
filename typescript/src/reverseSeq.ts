function reverseSeq(n: number): number[] {
  let arr = [];
  for (let i: number = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
}

console.log(reverseSeq(5));

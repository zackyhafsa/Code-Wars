function getSum(a, b) {
  if (a === b) {
    return a;
  }

  // Ensure a is smaller than b
  if (a > b) {
    [a, b] = [b, a];
  }

  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}

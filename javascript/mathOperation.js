function basicOp(operation, value1, value2) {
  if (operation === "+") {
    const result = value1 + value2;
    console.log(`${value1} + ${value2} = ${result}`);
  } else if (operation === "-") {
    const result = value1 - value2;
    console.log(`${value1} - ${value2} = ${result}`);
  } else if (operation === "*") {
    const result = value1 * value2;
    console.log(`${value1} * ${value2} = ${result}`);
  } else if (operation === "/") {
    const result = value1 / value2;
    console.log(`${value1} / ${value2} = ${result}`);
  }
  return 0;
}

basicOp("+", 4, 7);
basicOp("-", 15, 18);
basicOp("*", 5, 5);
basicOp("/", 49, 7);

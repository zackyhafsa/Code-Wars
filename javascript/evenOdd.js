function evenOrOdd(number) {
  if (number % 2 === 0 || -number % 2 === 0) {
    console.log("Even");
  } else if (number % 2 === 1 || -number % 2 === 1) {
    console.log("Odd");
  }
}

// atau

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

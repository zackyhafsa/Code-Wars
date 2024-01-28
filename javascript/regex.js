function validatePin(pin) {
  if (parseInt(pin.length) <= 4) {
    console.log(true);
  } else {
    console.log(false);
  }
}

validatePin("12as");

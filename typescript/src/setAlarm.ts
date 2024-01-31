function setAlarm(employed: boolean, vacation: boolean) {
  //   if (employed === true && vacation === false) {
  //     return true;
  //   }
  //   return false;

  //   return employed === true && vacation === false;
  return employed && !vacation;
}

console.log(setAlarm(true, false));

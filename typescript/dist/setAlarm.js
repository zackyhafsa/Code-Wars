"use strict";
function setAlarm(employed, vacation) {
    //   if (employed === true && vacation === false) {
    //     return true;
    //   }
    //   return false;
    //   return employed === true && vacation === false;
    return employed && !vacation;
}
console.log(setAlarm(true, false));

"use strict";
function sumMix(x) {
    const sum = x.map((value) => Number(value)).reduce((acc, curr) => acc + curr, 0);
    return sum;
}
console.log(sumMix([9, 3, "7", "3"]));

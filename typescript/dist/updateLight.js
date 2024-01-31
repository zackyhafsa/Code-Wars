"use strict";
function updateLigth(current) {
    if (current === "green")
        return "yellow";
    if (current === "yellow")
        return "red";
    if (current === "red")
        return "green";
    return "";
}
console.log(updateLigth("green"));
console.log(updateLigth("yellow"));
console.log(updateLigth("red"));

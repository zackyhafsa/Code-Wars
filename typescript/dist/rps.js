"use strict";
function rps(p1, p2) {
    //   if (p1 === p2) {
    //     return "Draw!";
    //   } else if (p1 === "scissors" && p2 === "paper") {
    //     return "Player 1 won";
    //   } else if (p1 === "paper" && p2 === "rock") {
    //     return "Player 1 won";
    //   } else if (p1 === "rock" && p2 === "scissors") {
    //     return "Player 1 won";
    //   } else if (p1 === "paper" && p2 === "scissors") {
    //     return "Player 2 won";
    //   } else if (p1 === "rock" && p2 === "paper") {
    //     return "Player 2 won";
    //   } else if (p1 === "scissors" && p2 === "paper") {
    //     return "Player 2 won";
    //   }
    if (p1 === p2) {
        return "Draw!";
    }
    else if ((p1 === "rock" && p2 === "scissors") ||
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "paper" && p2 === "rock")) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
    return "";
}
console.log(rps("scissors", "paper"));

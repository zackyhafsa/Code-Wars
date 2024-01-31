"use strict";
function greet(name, owner) {
    return name === owner ? "Hello boss" : "Hello Guest";
}
console.log(greet("Daniel", "Daniel"));

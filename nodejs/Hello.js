// console.log(require("./Math"));
const { add } = require("./Math");
const { sub } = require("./Math");
console.log("This is the external module " + add(2, 4));
console.log("This is the sub function: " + sub(4, 5));

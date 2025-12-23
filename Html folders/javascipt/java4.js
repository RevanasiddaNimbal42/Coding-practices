// console.log("this is the function file");

// function sum(x , y){
//     console.log(x+y);
// }

// sum(23.3212, 23);

// const func= (x, y)=>{
//     console.log(x*y);
// }
// func(23,42);

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter Your name:", function (name) {
  console.log("Hello " + name + "!");
  r1.close();
});

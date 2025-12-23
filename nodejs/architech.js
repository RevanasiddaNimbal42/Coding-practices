//cores in my system
const os = require("os");

const reuslt = os.cpus().length;
console.log(reuslt);

/* 
//non blocking \ asyncronous 
client -> callback queue -> event loop -> non blocking ->result to clients
//blocking \ syncronuous 
client -> callback queue -> event loop -> tread pool(Max-no: cores) -> result to clients.
*/

//non blocking or asyncronous code

/*const fs = require("fs");
console.log("1");
fs.readFile("text.txt", "utf-8", (error, result) => {
  if (result) {
    console.log(result);
  } else {
    console.log(error);
  }
});

console.log("2");
console.log("end");
*/

//blocking  or syncronous  code

const fs = require("fs");

console.log("start");
console.log(fs.readFileSync("text.txt", "utf-8"));
console.log("2");
console.log("end");

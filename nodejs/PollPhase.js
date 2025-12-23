//this is from event loop and which tell the asynchronus code

const fs = require("fs");
const readstream = fs.createReadStream("./text.txt");

console.log("start");

readstream.on("data", (chucks) => {
  console.log(chucks.toString());
});
console.log("end");

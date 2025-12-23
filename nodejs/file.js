const fs = require("fs");
// syncronous files
fs.writeFileSync("text.txt", "hey Revanasidda");
const result = fs.readFileSync("text.txt", "utf-8");
console.log(result);
fs.appendFileSync("text.txt", " The bengaluru cubben park");
const result1 = fs.readFileSync("text.txt", "utf-8");
console.log(result1);

//asuncronous files
fs.writeFile("text.txt", "The Vijayapur golgomaz!", (error) => {});
fs.readFile("text.txt", "utf-8", (error, result) => {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log(result.toString());
  }
});
fs.appendFile("text.txt", `${Date.now()} Revanasidda`, (error) => {
  if (error) throw error;
  console.log("Data append succesfully");

  const result2 = fs.readFileSync("text.txt", "utf-8");
  console.log(result2);
});

//copying and deleting the files
fs.cpSync("text.txt", "copy.txt");
fs.unlinkSync("./copy.txt");

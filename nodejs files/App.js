//Note: the type : module , in package.json

import add, { sub } from "./Math.js";
//or
import { sub as s } from "./Math.js";

import config from "./config.js";

console.log(add(2, 4));
console.log(s(8, 3));

async function loadModule() {
  const math = await import("./Math.js");
  console.log("Dynamic excution (dynamic import / export ");
  console.log("multification:", math.mult(4, 5));
}

loadModule();

//Configration file
console.log("Cofigration file:");
console.log("Name: ", config.appName);
console.log("Port: ", config.port);
console.log("apiKey: ", config.apiKey);
console.log("Database: ", config.databaseURL);

let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);

div.setAttribute("id", "name");
div.style.visibility = "visible";
div.style.color = "red";

let style = document.querySelector(".style");
style.style.backgroundColor = "red";
style.style.height = "120px";

style.style.background = "aqua";

style.textContent = "this is the box";

style.textContent = "this is the box";

style.textContent = "the box contains the color aqua";

let botton = document.createElement("botton");
botton.innerText = "click me!";
console.log(botton.innerText);

let place = document.querySelector(".list").before(botton);
// place.append(botton);

// place.prepend(botton);
// place.before(botton);
// place.after(botton);


botton.remove();




let parent = document.getElementById("parent");
let child = document.createElement("p");
child.textContent = "I am a child!";
parent.appendChild(child);
// Adds the <p> element inside the <div>

parent.removeChild(child);

let botton2 = document.getElementById("botton2");
let bott = document.createElement("botton");
bott.innerText = "cilck me!3";
botton2.appendChild(bott);
bott.style.background = "red";
bott.style.border = "2px solid blue";

let class2 = document.querySelector("p");


class2.classList.add("newclass");


//  class2.classList.remove("newclass");




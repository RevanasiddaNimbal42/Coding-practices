console.log("This is the js fill.");
console.dir(document.head);
let clas= document.getElementsByClassName("myclass");
let name=document.getElementsByTagName("p");
let id=document.getElementById("myid");
let elm=document.querySelector(".myclass");
console.log(id);
console.log(name);
console.log(clas);
console.dir(elm);
let allele=document.querySelectorAll(".myclass");
console.log(allele);
let eleId=document.querySelector("#myid");
console.dir(eleId);
let element= document.querySelector("p");
console.dir(element);

let firstc= document.querySelector(".color")
console.log(firstc.firstChild);
console.log(firstc.childNodes);
console.log(firstc.children);
console.log(firstc.lastChild);
console.log(firstc.nodeType);
console.log(firstc.nodeName);
console.log(firstc.lastChild);

let iner=document.querySelector(".innertext");
console.log(iner.innerHTML);
let body=document.querySelector("body");
console.log(body.innerHTML);

// body.innerText= "<div>Mother</div>";
let el=document.querySelector(".color");
console.log(el.innerHTML);
el.innerHTML="<h1> the india</h1>";
el.innerText="thank You java";

el.textContent="the is the word";
console.log(el.textContent);
el.textContent="the worlds";
console.log(el.textContent);











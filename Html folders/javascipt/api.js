//const url= 
let button=document.querySelector("#button");
let display=document.querySelector(".display");

const whether=async ()=>{
    console.log("Enter your whether city");
      let response=fetch(url);
      let data= (await response).json
      display.innerText=data;
    }
display.addEventListener("click",whether);
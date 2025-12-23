let btm=document.querySelector("#btm1");
// btm.onclick=()=>{
//     console.log("button was clicked ");
//     alert("are you sure");
// };

let box=document.querySelector("#box");

box.onmouseover=()=>{
    console.log("clicked though mouseover");
};

// btm.onclick=(evet)=>{
//     console.log(evet);
//     console.log(evet.type);
//     console.log(evet.target);
  
// }

btm1.addEventListener("click",()=>{
    console.log("this is the event 1");
    
});
btm1.addEventListener("click",()=>{
   console.log("this is the event 2");
});
let event3=()=>{
    console.log("This is the revemove function ");

};
btm1.addEventListener("click",event3);
btm1.removeEventListener("click",event3);

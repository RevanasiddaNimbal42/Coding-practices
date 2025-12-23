let modetype=document.querySelector("#mode");
 let curmode="light"; 
 let modetype2=document.querySelector("body");
  
// modetype.addEventListener("click",()=>{
//     if(curmode==="light"){
//         curmode="dark";
//     document.querySelector("body").style.backgroundColor="black";
//     }else{
//         curmode="light";
//     document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log("mode changed ");
// });   OR


modetype2.addEventListener("click",()=>{
       if(curmode==="light"){
        curmode="dark";
        modetype2.classList.add("dark");
        modetype2.classList.remove("light");

    }else{
        curmode="light";
        // modetype2.innerText="this is the dark mode";
        modetype2.classList.add("light");
        modetype2.classList.remove("dark");
    }
});
// callback function:
function getdata(branch, nextdata) {
    setTimeout(() => {
        console.log(branch);
        if (nextdata) {       
            nextdata();
        }
    }, 2000);
};

// callback hell function
getdata("computer science", () => {
    console.log("next data is processing...");
    getdata("aiml", () => {
        console.log("next data is processinsg...");
        getdata("ise",()=>{
            console.log("next data is processing...");  
            getdata("eee");
        })
    });
});

//promises in javascript using variable:
let mypromise=new Promise((resolve,rejected)=>{
    setTimeout(()=>{resolve("success")},5000);
});

mypromise.then((value)=>{
    console.log("then function",value);
}).catch((error)=>{
    console.log("error",error);
});

//Promise function using fuctions:
function showdata(value1,result){                 

    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            console.log("the time function",value1);
            result();
            resolve("successs");
        },1000)
    });
    
};
showdata("hello",()=>{
    console.log("this is the callback function");

}).then((value)=>{                  //.then is used to print resoleved text
                                       //   .catch is used to print rejected reason
    console.log(value);
});

//Promises in chain :  
function asyncfunc1(data1){
    return new Promise((resolve, rejected) => {
    setTimeout(() => {
        console.log("data1",data1);
        resolve("successfully completed data1");
    }, 3000);
});
}                                                        

function asyncfunc2 (data2){
    return new Promise((resolve, rejected) => {
    setTimeout(() => {                                       
        console.log("data2",data2);
        resolve("successfully completed data2");
    }, 3000);
});
}
console.log("fetching data1...");
asyncfunc1("revana").then((res) => {
        console.log(res);                       //this is the promise chain function
        console.log("fetching data2...");
   asyncfunc2("karthik").then((res) => {
        console.log(res);
    })

});
// OR 
console.log("fetching data1...");
asyncfunc1("revana").then((res)=>{
    console.log(res);
})

.then((res)=>{
    console.log("fetching data2...");
    return asyncfunc2("karthik");
});


//async-await functions:

 function ascync1(data){
   return new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        console.log("this is the async function and data is ",data);
        resolve("success");
    },3000);
   });
};

async function showalldata(){
    console.log(" data1 processing...");
    await ascync1("revanasidda")
    console.log("data2 processing...");
    await ascync1("durgappa");
}

console.log(showalldata());

//using IIFE(immediately invoked function expression) which is used to 
//call automatically the function but only one times.


//IIFE :
(async function (){
    console.log(" data1 processing...");
    await ascync1("revanasidda")
    console.log("data2 processing...");
    await ascync1("durgappa");
})();

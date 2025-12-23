console.log("this is the loop concept");

for( let i=0;i<10;i++ ){
    console.log(i);
}

let obj ={
    name: "Revanasidda",
    class:"CSE-B (II sem)",
    subject:"computer science"
    
}
for (const key in obj) {
     const element = obj[key]; 
         console.log(key,":",element);

    }

for (const element of "the world") {
    console.log(element);
}
let k=2;
while(k<9){
    console.log(k);
    k++;
}

let d=0;
do{
    console.log(d);
    d++;
}while(d>10);


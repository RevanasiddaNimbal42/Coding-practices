function sum(){
    console.log(12.43* 23);
    console.log("The nature is very nice");
}

sum();

function argument(x , y){//pass by value
    console.log(x+y);

}
argument(12, 23);

function returntype(x, y){
    return x-y;  //return type and we will return any type.
}
console.log(returntype(12, 12));

const name=(x, y)=>{
    console.log(x - y);
}
name(12, 31);
const  string= (a, b)=>{
    console.log(a, b);
}
string("revanasidda", "Nimbal");
let a=[1,2,3,4 ,5, 6,2,3,4];
const array=(a)=>{
    console.log(a);

}
array(a);

const  countvowels=(s)=>{
  let count =0;
  let vowels = "aeiouAEIOU";
  for(let c of s){
    if( vowels.includes(c)){
    count ++;
 }
}
  return count ;
}
console.log(countvowels("Aeiou"));

//for each loop
let arry =["revana", "karthik", "malappa", "amith", "nikil","durgi","yuvi","Ramesh"];
arry.forEach((k)=>{//direct
    console.log(k);
});
let d=[2,3,2 , 23,4,2,4,5]
d.forEach(function parameter(s){ //though functon 
    console.log(s)
    
});

function product (k, s){
    return k*s;
}
 
let arr=[1,2,3,4,5,6,7,8,9];
arr.forEach((k)=>{
    // console.log((k*k));
    return k;
});

// let kanada=arr.forEach((k)=>{
//     // console.log((k*k));
//     return k;                 }}=>which is not valued .
// });
//    console.log(kanada);

//map method
let ka=arr.map((s)=>{
    return s*3;
})
console.log(ka);

let filter=arr.filter((n)=>{
   return n%2==0;
})
console.log(filter);

let multi=arr.reduce((res, val)=>{
    return res*val;
});
console.log(multi);

w=[20 , 12 , 33 , 54 , 89 , 23,99 ];
let marks=w.filter((w)=>{
    return w>=90;
});
console.log(marks);















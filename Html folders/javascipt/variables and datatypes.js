// alert("This the javascrit file in this you learn variables");
// confirm("Are you sure? ...");
var a1=12;
var b1=15; //this the globle variable when you changed any where it will chage 
// value of that variable.
 const w=120;
//this is the constant variable its value doesn't change.

console.log(a1 + b1);
console.log(a1 * w);
let x=112;
let y=12; //this is the datatype which is not globle.
 if(x==10){
    let x=4;
    console.log(x+y +w);
 }
 else{
    console.log(a1*b1 -12 +w);
 }
 let t="Revanasidda Nimbal";
 let l='r';
 console.log(typeof a1, typeof l, typeof w , typeof x , typeof t);

//  objects
const r={
    name:"Revanasidda Nimabal",
    job:"Software engineer", 
    "Id_num":"122"
}

console.log(r);
r.salary="120cr";
console.log(r);
r.salary="12billians";
console.log(r);

r.name="nikil";
r.Id_num=1200;
r.job="software";
r.salary=1200;
console.log(r);
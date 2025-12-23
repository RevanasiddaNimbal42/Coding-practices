let marks=[ 12, 23 , 25, 34, 35 ];
console.log(marks);

marks[0]=1;
marks[2]=12;
console.log(marks);
console.log(marks.length);

//for loop 
for(let i=0;i<marks.length; i++){
    console.log(marks[i]);

}
//for of loop

for(let mark of marks){
    console.log(mark);
}

// for in
for(let m in marks){
    console.log(marks[m]);

}

let k=0;
for(let s in marks){
    k+=marks[s];
}
// console.log("this is the avg:"+ k/(marks.length));
console.log(`the avg of the array elements is : ${k/marks.length}`);


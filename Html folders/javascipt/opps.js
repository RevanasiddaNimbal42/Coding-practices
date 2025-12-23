// const student = {
//     name: "revanasidda",
//     subject: "engineering mathematics",
//     std: 12,
//     id: "U25UV24T029092",
//     student1(){
//         console.log("this is the method in student ");
//     }
// };

// // console.log(student.student1);
//  const employee ={
//      std:11,
     
//  }
//  const revanasidda={
//      name:"revanasiddappa",
//     subject: "engineering kannda",
//     std:10,
//     revana:122,
//      student1(){
//         console.log("this is the method in student1 ");
//     }
//  }
//  const inherit={
    
//  }
//  employee.__proto__=student;
//  revanasidda.__proto__=student; //inherit one function
//  Object.assign(inherit,revanasidda,employee);//to inhet more function
             
// //  inherit.__proto__=employee;  
//  console.log(revanasidda.student1);
//  console.log(revanasidda.name , revanasidda.subject );
//  console.log(inherit.revana);

// class college{
//     constructor(brand, milage){
//         this.brand=brand;
//         this.milage=milage;
//     }
//     stop(){
//         console.log("the stop");
//     }
//     start(){
//         console.log("the start");
//     }
//     };
       
//     // console.log(college);
//     let fartuner=new college("car",12);
//     console.log(fartuner);
//     let lexis=new college("rolesrise",80);
//     console.log(lexis);

  class person{
    constructor(name,branch){
        this.name=name;
        this.branch=branch;
    }
    habbits(){
        console.log("eat food,sleep well");
    } 
    eat(){
        console.log("eat");
    } 
};
try{  //which prints error and runs other part
    let s=12;
    let b=23;
    console.log(s+c);
}catch(err){
    console.log(err);
}
class engineer extends person{
    constructor(name,branch,id){
        super(name,branch); //this is the super keyword which is used to 
        //call parent class
        this.id=id;
    }
    work(){
        super.eat();//which calls parent method
        console.log("programing javascript");
    }
};


let revan=new engineer("revanasidda","computer science",12);
revan.work();

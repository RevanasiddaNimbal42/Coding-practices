const profile= {
    name: "Revanasidda",
    followings: 4,
    followers: 156000,
    posts: 195

};
console.log(profile);

const product= {
    name: "Boll pen",
    price: 12,
    rating: 4,
    offer: 5,
    isSale:true
};
product.name= "book";
console.log(product);
console.log(product["name"]);

let k="123";
console.log(k+ "abc");
console.log(k+'123');

const readline= require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter Number:",function(x){
    if(x%5==0){
        console.log("Yes");
    }else{
        console.log("No");
    }
    r1.close();
    
});




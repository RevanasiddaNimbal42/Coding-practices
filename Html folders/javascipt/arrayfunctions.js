let foodItem=["dosa", "paneer", "idli", "poori"];
console.log(foodItem);

foodItem.push("roti", "chapati"); //add the element at last 
console.log(foodItem);

 let result= foodItem.pop(); // removes the element at last.
 console.log(foodItem);
 console.log(result);

 console.log(foodItem.toString());
 
 let language=["kannada"," hindi", "telagu","clanguage", "cpp"];
 let language2=["marati"] ;
 let language1= [ "urdu"];

 let languages= language.concat(language1, language2);
 console.log(languages);
 language.shift("telagu");//which removes the element at first .
 console.log(language);
 language.unshift("Hulli");// which adds the element at first .
 console.log(language);

 console.log(language.slice(1,3 ));//It will cut the array and give that part .
 console.log(language);
 
 console.log(foodItem.slice(1,3)); // which removes elements from one to 3 but not 3 index
 console.log(foodItem);

let arr=[1,3,5,3,2,4,3];
arr.splice(1,2,12,12)//which removes form 1 to 2 elements adds many  elements in 
//that place.
console.log(arr);
arr.splice(1,2,43,25,21,234,1233);
console.log(arr);
 


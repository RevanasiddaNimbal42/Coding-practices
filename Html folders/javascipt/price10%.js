let price=[120 , 124 , 233, 23 ,1000];

for(let i=0;i<price.length;i++){
    let offer=price[i]/10;
   price[i]-=offer;

}
for(let k in price){
    console.log(price[k]);
}



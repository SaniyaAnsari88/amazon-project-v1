const cart = [
    {productName:"MacBook", productId: 01,productPrice:500},
    {productName:"RealMeTV", productId: 02,productPrice:1500},
    {productName:"iPhone", productId: 03,productPrice:500},
    {productName:"Laptop", productId: 04,productPrice:3500},
]; 
//{500:2 1500:1 3500:1}
//Accumulator, CurrentValue and InitialValue
const output = cart.reduce(
    function (acc, curr){
     if(acc[curr.productPrice]){
         acc[curr.productPrice]= ++acc[curr.productPrice];
        }
     else{
         acc[curr.productPrice]=1;
     }
     return acc;
    },{});

console.log(output);

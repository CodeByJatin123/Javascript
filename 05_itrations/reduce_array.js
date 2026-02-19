const mynums=[1,2,3];

// const nums=mynums.reduce(function(accl,curl){
//     console.log(`accl: ${accl},curl:${curl}`);
    
//     return accl+curl;
// },0)
// const nums=mynums.reduce((accl,curl)=>{
//     console.log(`accl: ${accl},curl:${curl}`);
//    return  accl+curl;
//    },0);
// console.log(nums);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const pay=shoppingCart.reduce((accl,items)=>accl+items.price,0)
console.log(pay);
console.table(shoppingCart);

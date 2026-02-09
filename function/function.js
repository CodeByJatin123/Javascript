// console.log("jatin");


// function print(){
//     console.log("Jatin")
// }
// print();

// function add(num1,num2){
//     return num1+num2;
//     console.log("Hello"); // they does not working because they came after the return statement.
// }
// // add(2,4);
// const result=add(2,2);
// // console.log("Result:",result);

// function justlogin(username){
//     return `${username} just logged in!`;
// }

// console.log(justlogin("Jatin"));


// calculate cart price

// function calculatecartprice(...num1){
//     return num1;
// }
// console.log(calculatecartprice(100,200,300));


// function calculatecartprice(val1,val2,...num1){  //-- interview important 
//     return num1;
// }
// console.log(calculatecartprice(100,200,300,400));

const user={
    username: "Jatin",
    price: 199
}

function handleobject(anyobject){
    return `The username is ${anyobject.username} and the price is ${anyobject.price};`
}

console.log(handleobject(user));
// object literals
const newsym=Symbol("key 1");

const jsuser={
    name:"Hitesh",
    "full name":"Hitesh Choudhary",
    [newsym]:"mykey",
    age:22, 
    location:"Jaipur",
    email:"Hitesh@goggle.com",
    isloggedin:false,
    lastlogindays:["Monday","Saturday"]
}
// console.log(jsuser.email);
// console.log(jsuser["full name"]);  

// // console.table([jsuser.name,jsuser.age,jsuser.location]);
// console.log(jsuser[newsym]);
// jsuser.email="jatin@goggle.com"
// console.log(jsuser.email);
// console.log(jsuser);
jsuser.greeting=function(){
    console.log("Hello JS user");
}
console.log(jsuser.greeting());



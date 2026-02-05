// array
// const myarr=[0,1,2,3,4,5];
// console.log(myarr[0]);

//array methoods

// myarr.push(6); // to add elemnet at last..
// console.log(myarr);

// myarr.pop(); // to remove last element..

// myarr.unshift(9); // to add element at first.. but this is not recommended..
// myarr.shift(); // to remove first element.. which is created my unshift..

//  console.log(myarr.includes(2));
// const newarr=myarr.join();
// console.log(myarr);
// console.log(newarr);
// console.log(typeof newarr);  // string 

//slice method
// console.log("A",myarr);

// const myn1=myarr.slice(1,3);
// console.log(myn1);
// console.log("B",myarr); // original array is not changed..|

// //splice method
// const myn2=myarr.splice(1,3);
// console.log(myn2); 
// console.log("C",myarr); // original array is changed..;

// console.log(Array.isArray("Hitesh")); // to check whether it is array or not..
// console.log(Array.from("hitesh"));
// console.log(Array.from({name:"hitesh"})); // they give me intresting string.. but it is not array.. it is object.. so we can not use array method on it..


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); // this is another way of creating array.




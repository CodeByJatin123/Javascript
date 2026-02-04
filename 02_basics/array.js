// array
const myarr=[0,1,2,3,4,5];
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
console.log("A",myarr);

const myn1=myarr.slice(1,3);
console.log(myn1);
console.log("B",myarr); // original array is not changed..|

//splice method
const myn2=myarr.splice(1,3);
console.log(myn2); // original array is changed..;
console.log("C",myarr); 

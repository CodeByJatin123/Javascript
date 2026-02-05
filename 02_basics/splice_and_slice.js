myarr=[1,2,3,4,5,6];
console.log("A",myarr);

const myn1=myarr.slice(1,3);
console.log(myn1);
console.log("B",myarr); // original array is not changed..|

//splice method
const myn2=myarr.splice(1,3);
console.log(myn2); 
console.log("C",myarr); // original array is changed..;
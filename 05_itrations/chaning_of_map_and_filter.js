
const nums=[1,2,3,4,5];

const mynums=nums
            .map((num)=>{return num*10})
            .map((num)=>{return num+1})
            .filter((num)=>{return num>30})
console.log(mynums);
